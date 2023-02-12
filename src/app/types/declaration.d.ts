import { FC, SVGAttributes } from 'react';

declare module '*.png';
declare module '*.jpeg';
declare module '*.svg' {
	const SVG: FC<SVGAttributes<SVGElement>>;
	export default SVG;
}

declare const __IS_DEV__: boolean;

declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}
