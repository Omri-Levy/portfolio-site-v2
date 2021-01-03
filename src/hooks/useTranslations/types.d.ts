type He = string;
type En = string;

type Translation = (he: He, en: En) => He | En;
interface Props {
	rtl: boolean;
}

export { Translation, Props };
