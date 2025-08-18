import { useState } from 'react'
import { Card, CardBody } from '@heroui/card'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'

import { GithubIcon } from '@/components/icons'
import { LinkedInIcon } from '@/components/icons'
import { title, subtitle } from '@/components/primitives'
import { siteConfig } from '@/config/site'
import DefaultLayout from '@/layouts/default'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailResponse, setEmailResponse] = useState({ status: 0 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const response = await fetch(`/api/email/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sendTo: formState.email,
        subject: `Portifolio Message from ${formState.name}`,
        content: formState.message,
      }),
    })

    setIsSubmitting(false)
    setEmailResponse({ status: response.status })
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <DefaultLayout>
      <section className="py-16">
        <div className="text-center">
          <h1 className={title({ size: 'md' })}>
            Get in <span className={title({ color: 'primary', size: 'md' })}>Touch</span>
          </h1>
          <p className={subtitle({ class: 'mt-4 mx-auto' })}>
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <Card className="p-2">
            <CardBody>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              {submitted && emailResponse.status === 200 ? (
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-medium text-primary mb-2">Thank you!</h3>
                  <p>Your message has been sent successfully. I&apos;ll get back to you soon.</p>
                </div>
              ) : submitted && emailResponse.status !== 200 ? (
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-medium text-primary mb-2">Thank you!</h3>
                  <p>
                    It wasn&apos;t possible to deliver your message, please try contacting me
                    directly at {siteConfig.links.email.replace('mailto:', '')}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <Input
                      isRequired
                      label="Name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      variant="bordered"
                      onChange={handleChange}
                    />

                    <Input
                      isRequired
                      label="Email"
                      name="email"
                      placeholder="your.email@example.com"
                      type="email"
                      value={formState.email}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <div>
                      <label className="block text-sm font-medium mb-1.5" htmlFor="message">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        required
                        className="w-full px-3 py-2 rounded-medium bg-default-100 border border-default-200 focus:border-primary focus:outline-none text-sm min-h-[120px] resize-y"
                        id="message"
                        name="message"
                        placeholder="How can I help you?"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      className="w-full"
                      color="primary"
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </CardBody>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-default-600">
                    {siteConfig.links.email.replace('mailto:', '')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Based in</h3>
                  <p className="text-default-600">São Paulo, Brazil</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Follow me</h3>
                  <div className="flex gap-4 mt-2">
                    <a
                      aria-label="GitHub"
                      className="text-default-600 hover:text-primary transition-colors"
                      href={siteConfig.links.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubIcon size={24} />
                    </a>
                    <a
                      aria-label="LinkedIn"
                      className="text-default-600 hover:text-primary transition-colors"
                      href={siteConfig.links.linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkedInIcon size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-12 p-6 bg-default-50 dark:bg-default-100 rounded-lg border border-default-200">
              <h3 className="text-lg font-medium mb-2">Current Availability</h3>
              <p className="text-default-600 mb-4">
                I&apos;m currently accepting new freelance projects and open to discussion about
                full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
