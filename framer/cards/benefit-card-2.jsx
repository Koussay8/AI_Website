// @ts-nocheck
/* eslint-disable */
/* Converted from Framer module uoeTJ6J6I - Cards/ Feature Card 2 (circle with rotating dot) */
"use client";

/**
 * @typedef {{
 * children?: React.ReactNode
 * locale?: string
 * style?: React.CSSProperties
 * className?: string
 * id?: string
 * ref?: any
 * width?: any
 * height?: any
 * layoutId?: string
 * variant?: 'desktop' | 'desktop hower' | 'mobile'
 * heading?: string
 * text?: string
 * jxpw6yvEh?: string
 * I0KtDm67s?: string
}} Props
 */
import { className, css, fonts } from "../chunks/chunk-2X2OXJIF.js";
import {
	className as className2,
	css as css2,
	fonts as fonts2,
} from "../chunks/chunk-NFCCS2HW.js";
import { routes } from "../chunks/chunk-YOD5Q24P.js";

import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ControlType,
	cx,
	getFontsFromSharedStyle,
	RichText,
	useActiveVariantCallback,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";

var cycleOrder = ["NlXlWXy00", "stYeceJ0D", "tiCGwxfhf"];
var serializationHash = "framer-8eM5m";
var variantClassNames = {
	NlXlWXy00: "framer-v-oq2tdo",
	stYeceJ0D: "framer-v-nhgla8",
	tiCGwxfhf: "framer-v-k1k3do",
};

function addPropertyOverrides(overrides, ...variants) {
	const nextOverrides = {};
	variants?.forEach(
		(variant) => variant && Object.assign(nextOverrides, overrides[variant]),
	);
	return nextOverrides;
}

var transition1 = {
	damping: 60,
	delay: 0,
	mass: 1,
	stiffness: 300,
	type: "spring",
};

var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;

var Transition = ({ value, children }) => {
	const config = React.useContext(MotionConfigContext);
	const transition = value ?? config.transition;
	const contextValue = React.useMemo(
		() => ({
			...config,
			transition,
		}),
		[JSON.stringify(transition)],
	);
	return (
		<MotionConfigContext.Provider value={contextValue}>
			{children}
		</MotionConfigContext.Provider>
	);
};

var Variants = motion.create(React.Fragment);

var humanReadableVariantMap = {
	"desktop hower": "stYeceJ0D",
	desktop: "NlXlWXy00",
	mobile: "tiCGwxfhf",
};

var getProps = ({ heading, height, id, text, width, ...props }) => {
	return {
		...props,
		I0KtDm67s:
			text ??
			props.I0KtDm67s ??
			"Join a community of satisfied clients benefiting from our proven excellence.",
		jxpw6yvEh:
			heading ?? props.jxpw6yvEh ?? "98% Client Success Rate",
		variant:
			humanReadableVariantMap[props.variant] ??
			props.variant ??
			"NlXlWXy00",
	};
};

var createLayoutDependency = (props, variants) => {
	if (props.layoutDependency)
		return variants.join("-") + props.layoutDependency;
	return variants.join("-");
};

var Component = React.forwardRef(function (props, ref) {
	const fallbackRef = useRef(null);
	const refBinding = ref ?? fallbackRef;
	const defaultLayoutId = React.useId();
	const { activeLocale, setLocale } = useLocaleInfo();
	const componentViewport = useComponentViewport();
	const {
		style,
		className: classNameProp,
		layoutId,
		variant,
		jxpw6yvEh,
		I0KtDm67s,
		...restProps
	} = getProps(props);
	const {
		baseVariant,
		classNames,
		clearLoadingGesture,
		gestureHandlers,
		gestureVariant,
		isLoading,
		setGestureState,
		setVariant,
		variants,
	} = useVariantState({
		cycleOrder,
		defaultVariant: "NlXlWXy00",
		ref: refBinding,
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const { activeVariantCallback, delay } =
		useActiveVariantCallback(baseVariant);
	const onMouseEnter1dft55o = activeVariantCallback(
		async (...args) => {
			setGestureState({ isHovered: true });
			setVariant("stYeceJ0D");
		},
	);
	const onMouseLeavemrrhgf = activeVariantCallback(
		async (...args) => {
			setGestureState({ isHovered: false });
			setVariant("NlXlWXy00");
		},
	);
	const sharedStyleClassNames = [className, className2];
	const scopingClassNames = cx(
		serializationHash,
		...sharedStyleClassNames,
	);
	return (
		<LayoutGroup id={layoutId ?? defaultLayoutId}>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<motion.div
						{...restProps}
						{...gestureHandlers}
						className={cx(
							scopingClassNames,
							"framer-oq2tdo",
							classNameProp,
							classNames,
						)}
						data-border={true}
						data-framer-name="desktop"
						data-highlight={true}
						layoutDependency={layoutDependency}
						layoutId="NlXlWXy00"
						onMouseEnter={onMouseEnter1dft55o}
						ref={refBinding}
						style={{
							"--border-bottom-width": "1px",
							"--border-color":
								"rgba(216, 231, 242, 0.07)",
							"--border-left-width": "1px",
							"--border-right-width": "1px",
							"--border-style": "solid",
							"--border-top-width": "1px",
							backgroundColor: "rgb(4, 7, 13)",
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							boxShadow:
								"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)",
							...style,
						}}
						{...addPropertyOverrides(
							{
								stYeceJ0D: {
									"data-framer-name":
										"desktop hower",
									onMouseEnter: undefined,
									onMouseLeave:
										onMouseLeavemrrhgf,
								},
								tiCGwxfhf: {
									"data-framer-name": "mobile",
									"data-highlight": undefined,
									onMouseEnter: undefined,
								},
							},
							baseVariant,
							gestureVariant,
						)}
					>
						{/* Shape - circle with rotating arm */}
						<motion.div
							className="framer-13uxw2p"
							data-framer-name="shape "
							layoutDependency={layoutDependency}
							layoutId="elzYiB5e7"
							style={{
								background:
									"linear-gradient(180deg, rgb(16, 19, 28) 0%, rgba(0, 0, 0, 0) 28%)",
								borderBottomLeftRadius: 100,
								borderBottomRightRadius: 100,
								borderTopLeftRadius: 100,
								borderTopRightRadius: 100,
								boxShadow:
									"inset 0px 2px 0px 0px rgba(207, 231, 255, 0.15)",
							}}
							transformTemplate={transformTemplate1}
							variants={{
								stYeceJ0D: {
									background:
										"linear-gradient(180deg, rgb(16, 19, 28) 10%, rgba(0, 0, 0, 0) 40%)",
									boxShadow:
										"inset 0px 2px 0px 0px rgba(207, 231, 255, 0.2)",
								},
							}}
						>
							{/* Rotating arm */}
							<motion.div
								className="framer-uk8kds"
								layoutDependency={layoutDependency}
								layoutId="H4LKJBb4d"
								style={{
									backgroundColor:
										"rgb(16, 19, 28)",
									borderBottomLeftRadius: 100,
									borderBottomRightRadius: 100,
									borderTopLeftRadius: 100,
									borderTopRightRadius: 100,
									originX: 0.61,
									originY: 0.8,
									rotate: -68,
								}}
								variants={{
									stYeceJ0D: { rotate: 68 },
								}}
							>
								{/* Dot container */}
								<motion.div
									className="framer-ekua24"
									layoutDependency={
										layoutDependency
									}
									layoutId="hVe7OTFNz"
									style={{
										backgroundColor:
											"rgb(4, 7, 13)",
										borderBottomLeftRadius: 100,
										borderBottomRightRadius: 100,
										borderTopLeftRadius: 100,
										borderTopRightRadius: 100,
									}}
								>
									{/* Inner purple dot */}
									<motion.div
										className="framer-zg66ot"
										layoutDependency={
											layoutDependency
										}
										layoutId="yahyo4w26"
										style={{
											backgroundColor:
												"rgb(99, 105, 150)",
											borderBottomLeftRadius: 100,
											borderBottomRightRadius: 100,
											borderTopLeftRadius: 100,
											borderTopRightRadius: 100,
										}}
									/>
								</motion.div>
							</motion.div>
						</motion.div>

						{/* Text Container */}
						<motion.div
							className="framer-1eg8ez2"
							data-framer-name="Text Container"
							layoutDependency={layoutDependency}
							layoutId="mIjihuWAf"
						>
							<RichText
								__fromCanvasComponent={true}
								children={
									<React.Fragment>
										<motion.p
											className="framer-styles-preset-i6z8by"
											data-styles-preset="j3hccNIu_"
										>
											98% Client Success Rate
										</motion.p>
									</React.Fragment>
								}
								className="framer-unhrxx"
								data-framer-name="Heading"
								fonts={["Inter"]}
								layoutDependency={layoutDependency}
								layoutId="VU33_XHME"
								style={{
									"--framer-paragraph-spacing":
										"0px",
								}}
								text={jxpw6yvEh}
								verticalAlignment="top"
								withExternalLayout={true}
							/>
							<RichText
								__fromCanvasComponent={true}
								children={
									<React.Fragment>
										<motion.p
											className="framer-styles-preset-1kvyxmc"
											data-styles-preset="n7RLEGRKm"
											style={{
												"--framer-text-alignment":
													"center",
											}}
										>
											Join a community of
											satisfied clients
											benefiting from our
											proven excellence.
										</motion.p>
									</React.Fragment>
								}
								className="framer-mg9ot8"
								data-framer-name="Paragraph"
								fonts={["Inter"]}
								layoutDependency={layoutDependency}
								layoutId="GFni0YIiB"
								style={{
									"--framer-paragraph-spacing":
										"0px",
									opacity: 0.6,
								}}
								text={I0KtDm67s}
								verticalAlignment="top"
								withExternalLayout={true}
							/>
						</motion.div>

						{/* Light effect */}
						<motion.div
							className="framer-trxjoi"
							data-framer-name="Light"
							layoutDependency={layoutDependency}
							layoutId="V1AAJTXp8"
							style={{
								background:
									"radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)",
								opacity: 0.1,
							}}
						/>
					</motion.div>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});

var componentCss = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-8eM5m.framer-hj8ai7, .framer-8eM5m .framer-hj8ai7 { display: block; }",
	".framer-8eM5m.framer-oq2tdo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 334px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 346px; will-change: var(--framer-will-change-override, transform); }",
	".framer-8eM5m .framer-13uxw2p { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 208px); left: 50%; overflow: hidden; position: absolute; top: 42px; width: 208px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
	".framer-8eM5m .framer-uk8kds { flex: none; height: 87px; left: calc(48.55769230769233% - 16px / 2); overflow: hidden; position: absolute; top: 37px; width: 16px; will-change: var(--framer-will-change-override, transform); }",
	".framer-8eM5m .framer-ekua24 { align-content: center; align-items: center; aspect-ratio: 1 / 1; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: var(--framer-aspect-ratio-supported, 15px); justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 1px; will-change: var(--framer-will-change-override, transform); }",
	".framer-8eM5m .framer-zg66ot { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 7px); overflow: hidden; position: relative; width: 7px; will-change: var(--framer-will-change-override, transform); }",
	".framer-8eM5m .framer-1eg8ez2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; }",
	".framer-8eM5m .framer-unhrxx, .framer-8eM5m .framer-mg9ot8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
	".framer-8eM5m .framer-trxjoi { -webkit-user-select: none; flex: none; height: 306px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; width: 437px; z-index: 1; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8eM5m.framer-oq2tdo, .framer-8eM5m .framer-ekua24, .framer-8eM5m .framer-1eg8ez2 { gap: 0px; } .framer-8eM5m.framer-oq2tdo > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-8eM5m.framer-oq2tdo > :first-child, .framer-8eM5m .framer-1eg8ez2 > :first-child { margin-top: 0px; } .framer-8eM5m.framer-oq2tdo > :last-child, .framer-8eM5m .framer-1eg8ez2 > :last-child { margin-bottom: 0px; } .framer-8eM5m .framer-ekua24 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-8eM5m .framer-ekua24 > :first-child { margin-left: 0px; } .framer-8eM5m .framer-ekua24 > :last-child { margin-right: 0px; } .framer-8eM5m .framer-1eg8ez2 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } }",
	".framer-8eM5m.framer-v-nhgla8.framer-oq2tdo, .framer-8eM5m.framer-v-k1k3do.framer-oq2tdo { aspect-ratio: 1.0354223433242506 / 1; height: var(--framer-aspect-ratio-supported, 334px); }",
	".framer-8eM5m.framer-v-k1k3do .framer-1eg8ez2 { gap: 4px; padding: 24px; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8eM5m.framer-v-k1k3do .framer-1eg8ez2 { gap: 0px; } .framer-8eM5m.framer-v-k1k3do .framer-1eg8ez2 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-8eM5m.framer-v-k1k3do .framer-1eg8ez2 > :first-child { margin-top: 0px; } .framer-8eM5m.framer-v-k1k3do .framer-1eg8ez2 > :last-child { margin-bottom: 0px; } }",
	...css,
	...css2,
	'.framer-8eM5m[data-border="true"]::after, .framer-8eM5m [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];

var stdin_default = withCSS(Component, componentCss, "framer-8eM5m");
stdin_default.displayName = "Cards/ Feature Card 2";
stdin_default.defaultProps = { height: 334, width: 346 };

addPropertyControls(stdin_default, {
	variant: {
		options: ["NlXlWXy00", "stYeceJ0D", "tiCGwxfhf"],
		optionTitles: ["desktop", "desktop hower", "mobile"],
		title: "Variant",
		type: ControlType.Enum,
	},
	jxpw6yvEh: {
		defaultValue: "98% Client Success Rate",
		displayTextArea: false,
		title: "Heading",
		type: ControlType.String,
	},
	I0KtDm67s: {
		defaultValue:
			"Join a community of satisfied clients benefiting from our proven excellence.",
		displayTextArea: true,
		title: "Text",
		type: ControlType.String,
	},
});

addFonts(
	stdin_default,
	[
		{
			explicitInter: true,
			fonts: [
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
					url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
					url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+1F00-1FFF",
					url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0370-03FF",
					url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
					url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
					url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
					url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
					weight: "400",
				},
			],
		},
		...getFontsFromSharedStyle(fonts),
		...getFontsFromSharedStyle(fonts2),
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// Wrapper with context providers
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";

var locales = [];
var defaultResponsiveVariants = {
	base: "tiCGwxfhf",
	xl: "NlXlWXy00",
};

/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"ca783251e0dabb68a02b81b9e1c62fc6122fe6d1c28ddd18da043e77b04e932a"
			}
			locale={locale}
			locales={locales}
		>
			{jsx(stdin_default, {
				...rest,
			})}
		</ContextProviders>
	);
}

ComponentWithRoot.Responsive = ({ locale = "", ...rest }) => {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"ca783251e0dabb68a02b81b9e1c62fc6122fe6d1c28ddd18da043e77b04e932a"
			}
			locale={locale}
			locales={locales}
		>
			<WithFramerBreakpoints
				Component={stdin_default}
				variants={defaultResponsiveVariants}
				{...rest}
			/>
		</ContextProviders>
	);
};

Object.assign(ComponentWithRoot, stdin_default);
var benefit_card_2_default = ComponentWithRoot;
export { benefit_card_2_default as default };
