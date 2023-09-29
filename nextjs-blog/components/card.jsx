import { useTranslation } from 'next-i18next';

const Card = () => {
    const { t } = useTranslation('common', { useSuspense: false });
  return <div>Card Div container {t("key_3")}</div>;
};

export default Card;