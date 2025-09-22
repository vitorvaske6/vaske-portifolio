import { useRouter } from 'next/router'
import { Button } from '@heroui/button'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import DefaultLayout from '@/layouts/default'

export default function Custom404() {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleGoHome = () => {
    router.push('/')
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-8xl font-bold text-primary/20 select-none">404</div>

          <h1 className="text-3xl font-bold text-foreground">{t('404.title')}</h1>

          <p className="text-lg text-default-500 leading-relaxed">{t('404.message')}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button color="primary" size="lg" onPress={handleGoHome}>
              {t('404.goHome')}
            </Button>

            <Button color="default" size="lg" variant="bordered" onPress={handleGoBack}>
              {t('404.goBack')}
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}
