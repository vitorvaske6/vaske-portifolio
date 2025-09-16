import { useState } from 'react'
import { Card, CardBody } from '@heroui/card'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Textarea } from '@heroui/input'
import { GithubIcon } from '@/components/icons'
import { LinkedInIcon } from '@/components/icons'
import { title, subtitle } from '@/components/primitives'
import { siteConfig } from '@/config/site'
import DefaultLayout from '@/layouts/default'
import { useLanguage } from '@/context/LanguageProvider'
import { SectionTitle } from '@/components'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailResponse, setEmailResponse] = useState({ status: 0 })

  const { t } = useLanguage()

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
          <SectionTitle
            primary={t('common:contact.title.primary')}
            secondary={t('common:contact.title.secondary')}
            order={t('common:contact.title.order')}
          />
          <p className={subtitle({ class: 'mt-4 mx-auto' })}>{t('common:contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <Card className="p-2">
            <CardBody>
              <h2 className="text-2xl font-bold mb-6">{t('common:contact.send_message.title')}</h2>

              {submitted && emailResponse.status === 200 ? (
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-medium text-primary mb-2">
                    {t('common:contact.send_message.success')}
                  </h3>
                  <p>{t('common:contact.send_message.success_message')}</p>
                </div>
              ) : submitted && emailResponse.status !== 200 ? (
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-medium text-primary mb-2">
                    {t('common:contact.send_message.error')}
                  </h3>
                  <p>
                    {t('common:contact.send_message.error')}{' '}
                    {siteConfig.links.email.replace('mailto:', '')}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <Input
                      isRequired
                      label={t('common:contact.send_message.name.label')}
                      name="name"
                      placeholder={t('common:contact.send_message.name.placeholder')}
                      value={formState.name}
                      variant="bordered"
                      onChange={handleChange}
                    />

                    <Input
                      isRequired
                      label={t('common:contact.send_message.email.label')}
                      name="email"
                      placeholder={t('common:contact.send_message.email.placeholder')}
                      type="email"
                      value={formState.email}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Textarea
                      isRequired
                      label={t('common:contact.send_message.message.label')}
                      name="message"
                      placeholder={t('common:contact.send_message.message.placeholder')}
                      type="text"
                      value={formState.message}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Button
                      className="w-full"
                      color="primary"
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      {t('common:contact.send_message.send')}
                    </Button>
                  </div>
                </form>
              )}
            </CardBody>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t('common:contact.contact_information.title')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">E-mail</h3>
                  <p className="text-default-600">
                    {siteConfig.links.email.replace('mailto:', '')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">{t('common:based')}</h3>
                  <p className="text-default-600">São Paulo, {t('common:country')}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {t('common:contact.contact_information.follow')}
                  </h3>
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
            <div className="mt-12 p-6 bg-default-100 dark:bg-default-100 rounded-lg border border-default-200">
              <h3 className="text-lg font-medium mb-2">
                {t('common:contact.contact_information.availability.title')}
              </h3>
              <p className="text-default-600 mb-4">
                {t('common:contact.contact_information.availability.description')}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm">
                  {t('common:contact.contact_information.availability.status')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
