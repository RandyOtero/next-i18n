import { useTranslation } from 'next-i18next';

const Card = () => {
    const { t } = useTranslation('common', { useSuspense: true });
  return <div>Card Div container {t("key_3")}</div>;
};

export default Card;