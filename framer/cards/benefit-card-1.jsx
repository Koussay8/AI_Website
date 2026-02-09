// @ts-nocheck
/* eslint-disable */
/* Converted from Framer module hxOKyxvzm - Cards/ Feature Card 1 (orbital/satellite pattern) */
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
 * logo?: any
 * zzm203ZdU?: string
 * Z9AfFpsg3?: string
 * hZM1ydIna?: any
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
	Image,
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

var cycleOrder = ["deVeoE8qx", "sqKSSyBG9", "x1_unLjoh"];
var serializationHash = "framer-SKgRn";
var variantClassNames = {
	deVeoE8qx: "framer-v-1jq8vqv",
	sqKSSyBG9: "framer-v-n4bsfe",
	x1_unLjoh: "framer-v-1uilgty",
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

var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;

var toResponsiveImage = (value) => {
	if (
		typeof value === "object" &&
		value !== null &&
		typeof value.src === "string"
	) {
		return value;
	}
	return typeof value === "string" ? { src: value } : undefined;
};

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
	"desktop hower": "sqKSSyBG9",
	desktop: "deVeoE8qx",
	mobile: "x1_unLjoh",
};

var getProps = ({ heading, height, id, logo, text, width, ...props }) => {
	return {
		...props,
		hZM1ydIna:
			logo ??
			props.hZM1ydIna ?? {
				alt: "",
				src: "https://framerusercontent.com/images/EdYwMQFSY0q3kCvKPrFpiTV5w.png",
			},
		variant:
			humanReadableVariantMap[props.variant] ??
			props.variant ??
			"deVeoE8qx",
		Z9AfFpsg3:
			text ??
			props.Z9AfFpsg3 ??
			"Empower your business to thrive with our tailored web design solutions.",
		zzm203ZdU:
			heading ?? props.zzm203ZdU ?? "Fuel Your Growth",
	};
};

var createLayoutDependency = (props, variants) => {
	if (props.layoutDependency)
		return variants.join("-") + props.layoutDependency;
	return variants.join("-");
};

/** Helper to create an orbital arm (connector + satellite dot) */
function OrbitalArm({
	armClassName,
	connectorClassName,
	dotClassName,
	rotation,
	layoutDependency,
	armLayoutId,
	connectorLayoutId,
	dotLayoutId,
}) {
	return (
		<motion.div
			className={armClassName}
			layoutDependency={layoutDependency}
			layoutId={armLayoutId}
			style={{ rotate: rotation }}
		>
			<motion.div
				className={connectorClassName}
				layoutDependency={layoutDependency}
				layoutId={connectorLayoutId}
				style={{
					backgroundColor: "rgb(16, 19, 28)",
					borderBottomLeftRadius: 50,
					borderBottomRightRadius: 50,
					borderTopLeftRadius: 50,
					borderTopRightRadius: 50,
					rotate: -33,
				}}
			/>
			<motion.div
				className={dotClassName}
				layoutDependency={layoutDependency}
				layoutId={dotLayoutId}
				style={{
					backgroundColor: "rgb(16, 19, 28)",
					borderBottomLeftRadius: 100,
					borderBottomRightRadius: 100,
					borderTopLeftRadius: 100,
					borderTopRightRadius: 100,
					boxShadow:
						"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.15)",
				}}
				variants={{
					sqKSSyBG9: {
						boxShadow:
							"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)",
					},
				}}
			/>
		</motion.div>
	);
}

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
		zzm203ZdU,
		Z9AfFpsg3,
		hZM1ydIna,
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
		defaultVariant: "deVeoE8qx",
		ref: refBinding,
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const { activeVariantCallback, delay } =
		useActiveVariantCallback(baseVariant);
	const onMouseEnter196gsuk = activeVariantCallback(
		async (...args) => {
			setGestureState({ isHovered: true });
			setVariant("sqKSSyBG9");
		},
	);
	const onMouseLeave11yux = activeVariantCallback(
		async (...args) => {
			setGestureState({ isHovered: false });
			setVariant("deVeoE8qx");
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
							"framer-1jq8vqv",
							classNameProp,
							classNames,
						)}
						data-border={true}
						data-framer-name="desktop"
						data-highlight={true}
						layoutDependency={layoutDependency}
						layoutId="deVeoE8qx"
						onMouseEnter={onMouseEnter196gsuk}
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
								sqKSSyBG9: {
									"data-framer-name":
										"desktop hower",
									onMouseEnter: undefined,
									onMouseLeave:
										onMouseLeave11yux,
								},
								x1_unLjoh: {
									"data-framer-name": "mobile",
									"data-highlight": undefined,
									onMouseEnter: undefined,
								},
							},
							baseVariant,
							gestureVariant,
						)}
					>
						{/* Shape - orbital pattern */}
						<motion.div
							className="framer-1i0eh14"
							data-framer-name="shape"
							layoutDependency={layoutDependency}
							layoutId="DpMgg9Ryi"
							style={{ rotate: 0 }}
							variants={{
								sqKSSyBG9: { rotate: 10 },
								x1_unLjoh: { rotate: 0 },
							}}
						>
							{/* Center circle with logo */}
							<motion.div
								className="framer-1oj7koq"
								data-framer-name="center"
								layoutDependency={layoutDependency}
								layoutId="rdscEKFd6"
								style={{
									backgroundColor:
										"rgb(16, 19, 28)",
									borderBottomLeftRadius: 100,
									borderBottomRightRadius: 100,
									borderTopLeftRadius: 100,
									borderTopRightRadius: 100,
									boxShadow:
										"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.15)",
								}}
								transformTemplate={
									transformTemplate1
								}
								variants={{
									sqKSSyBG9: {
										boxShadow:
											"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)",
									},
								}}
							>
								<Image
									background={{
										alt: "",
										fit: "fit",
										pixelHeight: 147,
										pixelWidth: 147,
										sizes: "30px",
										...toResponsiveImage(
											hZM1ydIna,
										),
										positionX: "center",
										positionY: "center",
									}}
									className="framer-1741p8o"
									layoutDependency={
										layoutDependency
									}
									layoutId="yx8ovHHnb"
									style={{
										borderBottomLeftRadius: 100,
										borderBottomRightRadius: 100,
										borderTopLeftRadius: 100,
										borderTopRightRadius: 100,
										opacity: 0.5,
									}}
									variants={{
										sqKSSyBG9: {
											opacity: 0.9,
										},
									}}
								/>
							</motion.div>

							{/* Orbital arm 1 - 59° */}
							<OrbitalArm
								armClassName="framer-18oagcr"
								connectorClassName="framer-1s40749"
								dotClassName="framer-17pkjcl"
								rotation={59}
								layoutDependency={layoutDependency}
								armLayoutId="Hp0R7NHSJ"
								connectorLayoutId="Oducarn8n"
								dotLayoutId="YoSvt8JYC"
							/>

							{/* Orbital arm 2 - 0° (vertical) */}
							<motion.div
								className="framer-g5noam"
								layoutDependency={layoutDependency}
								layoutId="TFKK4UY4J"
							>
								<motion.div
									className="framer-zh9ify"
									layoutDependency={
										layoutDependency
									}
									layoutId="oGCVHTHrF"
									style={{
										backgroundColor:
											"rgb(16, 19, 28)",
										borderBottomLeftRadius: 50,
										borderBottomRightRadius: 50,
										borderTopLeftRadius: 50,
										borderTopRightRadius: 50,
										rotate: -33,
									}}
								/>
								<motion.div
									className="framer-memf6w"
									layoutDependency={
										layoutDependency
									}
									layoutId="nOmsy1qbJ"
									style={{
										backgroundColor:
											"rgb(16, 19, 28)",
										borderBottomLeftRadius: 100,
										borderBottomRightRadius: 100,
										borderTopLeftRadius: 100,
										borderTopRightRadius: 100,
										boxShadow:
											"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.15)",
									}}
									variants={{
										sqKSSyBG9: {
											boxShadow:
												"inset 0px 2px 1px 0px rgba(207, 231, 255, 0.2)",
										},
									}}
								/>
							</motion.div>

							{/* Orbital arm 3 - -84° */}
							<OrbitalArm
								armClassName="framer-1ldajcz"
								connectorClassName="framer-19qauj7"
								dotClassName="framer-1tcyf7n"
								rotation={-84}
								layoutDependency={layoutDependency}
								armLayoutId="Grh5TgDLM"
								connectorLayoutId="aGZ07sB7A"
								dotLayoutId="ZHe1ejgiG"
							/>

							{/* Orbital arm 4 - 142° */}
							<OrbitalArm
								armClassName="framer-ifiiu"
								connectorClassName="framer-i1mokf"
								dotClassName="framer-125rumq"
								rotation={142}
								layoutDependency={layoutDependency}
								armLayoutId="bHWWjVZ9Y"
								connectorLayoutId="b3w1jJN0U"
								dotLayoutId="YcQcdcCIl"
							/>

							{/* Orbital arm 5 - 314° */}
							<OrbitalArm
								armClassName="framer-b96z9y"
								connectorClassName="framer-1cdzoeu"
								dotClassName="framer-eo8w3n"
								rotation={314}
								layoutDependency={layoutDependency}
								armLayoutId="MwGDy5WHl"
								connectorLayoutId="mpl_J0DJZ"
								dotLayoutId="n2fFSWxSz"
							/>

							{/* Orbital arm 6 - 202° */}
							<OrbitalArm
								armClassName="framer-1jqjoae"
								connectorClassName="framer-1i5t1yn"
								dotClassName="framer-8n3v1l"
								rotation={202}
								layoutDependency={layoutDependency}
								armLayoutId="jDYNhp8xV"
								connectorLayoutId="V8UOyubew"
								dotLayoutId="D9C5yEu6j"
							/>
						</motion.div>

						{/* Text Container */}
						<motion.div
							className="framer-1nc5k9h"
							data-framer-name="Text Container"
							layoutDependency={layoutDependency}
							layoutId="mBzfoUIYh"
						>
							<RichText
								__fromCanvasComponent={true}
								children={
									<React.Fragment>
										<motion.p
											className="framer-styles-preset-i6z8by"
											data-styles-preset="j3hccNIu_"
										>
											Fuel Your Growth
										</motion.p>
									</React.Fragment>
								}
								className="framer-16whubz"
								data-framer-name="Heading"
								fonts={["Inter"]}
								layoutDependency={layoutDependency}
								layoutId="KNKWjguDc"
								style={{
									"--framer-paragraph-spacing":
										"0px",
								}}
								text={zzm203ZdU}
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
											Empower your business to
											thrive with our tailored
											web design solutions.
										</motion.p>
									</React.Fragment>
								}
								className="framer-bw01k0"
								data-framer-name="Paragraph"
								fonts={["Inter"]}
								layoutDependency={layoutDependency}
								layoutId="guZ3jBbGn"
								style={{
									"--framer-paragraph-spacing":
										"0px",
									opacity: 0.6,
								}}
								text={Z9AfFpsg3}
								verticalAlignment="top"
								withExternalLayout={true}
							/>
						</motion.div>

						{/* Light effect */}
						<motion.div
							className="framer-1atohg8"
							data-framer-name="Light"
							layoutDependency={layoutDependency}
							layoutId="Ypku8AoRk"
							style={{
								background:
									"radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)",
								borderBottomLeftRadius: 20,
								borderBottomRightRadius: 20,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
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
	".framer-SKgRn.framer-1daen8m, .framer-SKgRn .framer-1daen8m { display: block; }",
	".framer-SKgRn.framer-1jq8vqv { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 334px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 346px; }",
	".framer-SKgRn .framer-1i0eh14 { flex: none; height: 282px; left: calc(50.00000000000002% - 297px / 2); overflow: hidden; position: absolute; top: -25px; width: 297px; z-index: 1; }",
	".framer-SKgRn .framer-1oj7koq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; left: 53%; overflow: hidden; padding: 7px; position: absolute; top: 50%; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
	".framer-SKgRn .framer-1741p8o { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: hidden; position: relative; width: 30px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-18oagcr { flex: none; height: 126px; overflow: hidden; position: absolute; right: 58px; top: 8px; width: 88px; }",
	".framer-SKgRn .framer-1s40749, .framer-SKgRn .framer-i1mokf, .framer-SKgRn .framer-1cdzoeu, .framer-SKgRn .framer-1i5t1yn { bottom: -6px; flex: none; height: 100px; overflow: hidden; position: absolute; right: 30px; width: 5px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-17pkjcl, .framer-SKgRn .framer-125rumq, .framer-SKgRn .framer-eo8w3n, .framer-SKgRn .framer-8n3v1l { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 19px; overflow: hidden; position: absolute; top: 33px; width: 20px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-g5noam { flex: none; height: 126px; left: 71px; overflow: hidden; position: absolute; top: 15px; width: 88px; }",
	".framer-SKgRn .framer-zh9ify { bottom: -8px; flex: none; height: 118px; overflow: hidden; position: absolute; right: 33px; width: 4px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-memf6w { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 11px; overflow: hidden; position: absolute; top: 14px; width: 20px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-1ldajcz { bottom: 43px; flex: none; height: 126px; left: 47px; overflow: hidden; position: absolute; width: 88px; }",
	".framer-SKgRn .framer-19qauj7 { bottom: -7px; flex: none; height: 115px; overflow: hidden; position: absolute; right: 32px; width: 5px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-1tcyf7n { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 9px; overflow: hidden; position: absolute; top: 13px; width: 20px; will-change: var(--framer-will-change-override, transform); }",
	".framer-SKgRn .framer-ifiiu { bottom: 53px; flex: none; height: 126px; overflow: hidden; position: absolute; right: 30px; width: 88px; }",
	".framer-SKgRn .framer-b96z9y { flex: none; height: 126px; left: 32px; overflow: hidden; position: absolute; top: 59px; width: 88px; }",
	".framer-SKgRn .framer-1jqjoae { bottom: 12px; flex: none; height: 126px; overflow: hidden; position: absolute; right: 83px; width: 88px; }",
	".framer-SKgRn .framer-1nc5k9h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; }",
	".framer-SKgRn .framer-16whubz, .framer-SKgRn .framer-bw01k0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
	".framer-SKgRn .framer-1atohg8 { -webkit-user-select: none; flex: none; height: 306px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; width: 437px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SKgRn.framer-1jq8vqv, .framer-SKgRn .framer-1oj7koq, .framer-SKgRn .framer-1nc5k9h { gap: 0px; } .framer-SKgRn.framer-1jq8vqv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-SKgRn.framer-1jq8vqv > :first-child, .framer-SKgRn .framer-1nc5k9h > :first-child { margin-top: 0px; } .framer-SKgRn.framer-1jq8vqv > :last-child, .framer-SKgRn .framer-1nc5k9h > :last-child { margin-bottom: 0px; } .framer-SKgRn .framer-1oj7koq > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-SKgRn .framer-1oj7koq > :first-child { margin-left: 0px; } .framer-SKgRn .framer-1oj7koq > :last-child { margin-right: 0px; } .framer-SKgRn .framer-1nc5k9h > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } }",
	".framer-SKgRn.framer-v-n4bsfe.framer-1jq8vqv { aspect-ratio: 1.035928143712575 / 1; height: var(--framer-aspect-ratio-supported, 334px); }",
	".framer-SKgRn.framer-v-1uilgty.framer-1jq8vqv { aspect-ratio: 1.035928143712575 / 1; height: var(--framer-aspect-ratio-supported, 339px); width: 351px; }",
	".framer-SKgRn.framer-v-1uilgty .framer-1nc5k9h { gap: 4px; padding: 24px; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SKgRn.framer-v-1uilgty .framer-1nc5k9h { gap: 0px; } .framer-SKgRn.framer-v-1uilgty .framer-1nc5k9h > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-SKgRn.framer-v-1uilgty .framer-1nc5k9h > :first-child { margin-top: 0px; } .framer-SKgRn.framer-v-1uilgty .framer-1nc5k9h > :last-child { margin-bottom: 0px; } }",
	...css,
	...css2,
	'.framer-SKgRn[data-border="true"]::after, .framer-SKgRn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];

var stdin_default = withCSS(Component, componentCss, "framer-SKgRn");
stdin_default.displayName = "Cards/ Feature Card 1";
stdin_default.defaultProps = { height: 334, width: 346 };

addPropertyControls(stdin_default, {
	variant: {
		options: ["deVeoE8qx", "sqKSSyBG9", "x1_unLjoh"],
		optionTitles: ["desktop", "desktop hower", "mobile"],
		title: "Variant",
		type: ControlType.Enum,
	},
	zzm203ZdU: {
		defaultValue: "Fuel Your Growth",
		displayTextArea: false,
		title: "Heading",
		type: ControlType.String,
	},
	Z9AfFpsg3: {
		defaultValue:
			"Empower your business to thrive with our tailored web design solutions.",
		displayTextArea: true,
		title: "Text",
		type: ControlType.String,
	},
	hZM1ydIna: {
		title: "logo",
		type: ControlType.ResponsiveImage,
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
	base: "x1_unLjoh",
	xl: "deVeoE8qx",
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
var benefit_card_1_default = ComponentWithRoot;
export { benefit_card_1_default as default };
