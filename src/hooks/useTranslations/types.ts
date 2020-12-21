type He = string;
type En = string;

type Translation = (he: He, en: En) => He | En;

export {Translation};
