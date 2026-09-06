(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/src/app/ui/landing-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const NAV_LINKS = [
    'How It Works',
    'Businesses',
    'For Investors',
    'About'
];
const STATS = [
    {
        value: '$2.4M',
        label: 'Total Funded'
    },
    {
        value: '147',
        label: 'Businesses Supported'
    },
    {
        value: '3,200+',
        label: 'Active Investors'
    },
    {
        value: '94%',
        label: 'Campaign Success Rate'
    }
];
const HOW_IT_WORKS_INVESTOR = [
    {
        step: '01',
        title: 'Browse Verified Businesses',
        desc: 'Every listing on our platform has passed our background check and financial analysis process.'
    },
    {
        step: '02',
        title: 'Choose Your Stake',
        desc: 'Select how much you want to invest and what equity share you receive. Fully transparent, halal, no interest involved.'
    },
    {
        step: '03',
        title: 'Grow Together',
        desc: 'Receive profit distributions as the business grows. Track your portfolio and stay connected with founders.'
    }
];
const HOW_IT_WORKS_BUSINESS = [
    {
        step: '01',
        title: 'Apply & Get Verified',
        desc: 'Submit your business profile. Our team conducts background checks and financial due diligence to verify your credibility.'
    },
    {
        step: '02',
        title: 'Set Your Terms',
        desc: "Define how much equity you're offering and your funding target. Our legal templates ensure a fair, Shariah-compliant agreement."
    },
    {
        step: '03',
        title: 'Receive Funding',
        desc: 'Once your campaign is live, investors from the community can contribute and become stakeholders in your growth.'
    }
];
const TRUST_POINTS = [
    {
        icon: '🔍',
        title: 'Background Verified',
        desc: 'Every business on our platform is vetted by our compliance team before listing.'
    },
    {
        icon: '📊',
        title: 'Financial Analysis',
        desc: 'Optional deep-dive financial reports prepared by qualified analysts to inform your decision.'
    },
    {
        icon: '☪️',
        title: 'Shariah Compliant',
        desc: 'All investments are equity-based — no interest, no riba. Profit and risk are shared fairly.'
    },
    {
        icon: '⚖️',
        title: 'Legal Framework',
        desc: 'Standardised equity agreements drafted with experienced commercial lawyers protect both parties.'
    }
];
function ProgressBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "5e6fd54cc90ab79036ca6af0ee03b0f24c8d33179826ff75b01b20b06567faa8") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e6fd54cc90ab79036ca6af0ee03b0f24c8d33179826ff75b01b20b06567faa8";
    }
    const { raised, target } = t0;
    const pct = Math.min(raised / target * 100, 100);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            backgroundColor: "var(--muted)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = `${pct}%`;
    let t3;
    if ($[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-1.5 rounded-full overflow-hidden",
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full rounded-full transition-all",
                style: {
                    width: t2,
                    backgroundColor: "var(--primary)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 105,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c = ProgressBar;
function TagBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "5e6fd54cc90ab79036ca6af0ee03b0f24c8d33179826ff75b01b20b06567faa8") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e6fd54cc90ab79036ca6af0ee03b0f24c8d33179826ff75b01b20b06567faa8";
    }
    const { tag } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            Featured: {
                bg: "var(--accent)",
                color: "var(--accent-foreground)"
            },
            "Closing Soon": {
                bg: "var(--primary)",
                color: "var(--primary-foreground)"
            },
            New: {
                bg: "var(--secondary)",
                color: "var(--secondary-foreground)"
            }
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const styles = t1;
    let t2;
    if ($[2] !== tag) {
        t2 = styles[tag] ?? {
            bg: "var(--muted)",
            color: "var(--foreground)"
        };
        $[2] = tag;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const s = t2;
    let t3;
    if ($[4] !== s.bg || $[5] !== s.color) {
        t3 = {
            backgroundColor: s.bg,
            color: s.color
        };
        $[4] = s.bg;
        $[5] = s.color;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3 || $[8] !== tag) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-semibold px-2.5 py-1 rounded-full",
            style: t3,
            children: tag
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = tag;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c1 = TagBadge;
function LandingPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "5e6fd54cc90ab79036ca6af0ee03b0f24c8d33179826ff75b01b20b06567faa8") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e6fd54cc90ab79036ca6af0ee03b0f24c8d33179826ff75b01b20b06567faa8";
    }
    const { auth, businesses } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("investor");
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const steps = activeTab === "investor" ? HOW_IT_WORKS_INVESTOR : HOW_IT_WORKS_BUSINESS;
    let t1;
    if ($[1] !== auth || $[2] !== router) {
        t1 = ({
            "LandingPage[handleListBusiness]": ()=>{
                if (!auth) {
                    router.push("/signup?role=business");
                    return;
                }
                if (auth.dashboardPath === "/dashboard/business") {
                    router.push(auth.dashboardPath);
                    return;
                }
                alert("Only business accounts can list a business. Redirecting you to create a business account.");
                router.push("/signup?role=business");
            }
        })["LandingPage[handleListBusiness]"];
        $[1] = auth;
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleListBusiness = t1;
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            minHeight: "100%"
        };
        t3 = {
            backgroundColor: "var(--accent)",
            position: "sticky",
            top: 0,
            zIndex: 50
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            height: 64
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center rounded-md",
                    style: {
                        width: 28,
                        height: 28,
                        backgroundColor: "var(--primary)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "white",
                            fontSize: 11,
                            fontWeight: 800
                        },
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 258,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 254,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--accent-foreground)",
                        fontWeight: 700,
                        fontSize: 18,
                        letterSpacing: "-0.02em"
                    },
                    children: "Asaan Fund"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 262,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "hidden md:flex items-center gap-8",
            children: NAV_LINKS.map(_LandingPageNAV_LINKSMap)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 274,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== auth) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-3",
            children: auth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--secondary)",
                            fontSize: 14,
                            fontWeight: 500
                        },
                        children: [
                            "Hi, ",
                            auth.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 281,
                        columnNumber: 71
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: auth.dashboardPath,
                        className: "bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-80 hover:bg-opacity-80 active:scale-[0.98] transition-all duration-150",
                        style: {
                            backgroundColor: "var(--primary)",
                            color: "var(--primary-foreground)",
                            fontSize: 14,
                            fontWeight: 600,
                            padding: "8px 18px",
                            borderRadius: 10,
                            textDecoration: "none"
                        },
                        children: "Go to Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 285,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 281,
                columnNumber: 69
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/login",
                        className: "text-secondary text-sm font-medium no-underline hover:text-white hover:opacity-80 active:scale-[0.98] transition-all duration-150",
                        style: {
                            color: "var(--secondary)",
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: "none"
                        },
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 293,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/signup",
                        className: "bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-90 active:scale-[0.98] transition-all duration-150",
                        style: {
                            backgroundColor: "var(--primary)",
                            color: "var(--primary-foreground)",
                            fontSize: 14,
                            fontWeight: 600,
                            padding: "8px 18px",
                            borderRadius: 10,
                            textDecoration: "none"
                        },
                        children: "Get Started"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 298,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 293,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 281,
            columnNumber: 10
        }, this);
        $[9] = auth;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            color: "var(--accent-foreground)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4
        };
        t9 = ({
            "LandingPage[<button>.onClick]": ()=>setMobileOpen(_LandingPageButtonOnClickSetMobileOpen)
        })["LandingPage[<button>.onClick]"];
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[13] !== mobileOpen) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "md:hidden",
            style: t8,
            onClick: t9,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 333,
                    columnNumber: 177
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 12h18M3 6h18M3 18h18"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 333,
                    columnNumber: 213
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 333,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[13] = mobileOpen;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-6xl mx-auto px-6 flex items-center justify-between",
            style: t4,
            children: [
                t5,
                t6,
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t7;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== auth || $[19] !== mobileOpen) {
        t12 = mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden px-6 pb-4 flex flex-col gap-3",
            style: {
                backgroundColor: "#0e322f"
            },
            children: [
                NAV_LINKS.map(_LandingPageNAV_LINKSMap2),
                auth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: auth.dashboardPath,
                    className: "bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-80 hover:bg-opacity-80 active:scale-[0.98] transition-all duration-150",
                    style: {
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)",
                        fontSize: 14,
                        fontWeight: 600,
                        padding: "10px 18px",
                        borderRadius: 10,
                        textDecoration: "none",
                        textAlign: "center",
                        marginTop: 8
                    },
                    children: "Go to Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 352,
                    columnNumber: 58
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/signup",
                    className: "bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-90 active:scale-[0.98] transition-all duration-150",
                    style: {
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)",
                        fontSize: 14,
                        fontWeight: 600,
                        padding: "10px 18px",
                        borderRadius: 10,
                        textDecoration: "none",
                        textAlign: "center",
                        marginTop: 8
                    },
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 362,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 350,
            columnNumber: 25
        }, this);
        $[18] = auth;
        $[19] = mobileOpen;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t11 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            style: t3,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            backgroundColor: "var(--accent)",
            paddingTop: 80,
            paddingBottom: 112,
            paddingLeft: 24,
            paddingRight: 24,
            position: "relative",
            overflow: "hidden"
        };
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        right: -96,
                        top: -96,
                        width: 384,
                        height: 384,
                        borderRadius: "50%",
                        border: "1px solid rgba(221,232,226,0.10)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 404,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        right: -64,
                        top: -64,
                        width: 288,
                        height: 288,
                        borderRadius: "50%",
                        border: "1px solid rgba(221,232,226,0.10)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 412,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        right: 128,
                        bottom: 0,
                        width: 192,
                        height: 192,
                        borderRadius: "50%",
                        border: "1px solid rgba(221,232,226,0.08)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 420,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
    } else {
        t14 = $[24];
        t15 = $[25];
    }
    let t16;
    let t17;
    let t18;
    let t19;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            position: "relative"
        };
        t17 = {
            maxWidth: 620
        };
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: "inline-block",
                color: "var(--secondary)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
                border: "1px solid rgba(221,232,226,0.30)",
                borderRadius: 999,
                padding: "4px 12px"
            },
            children: "Halal · Equity-Based · Community-Driven"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        t19 = {
            color: "var(--accent-foreground)",
            fontSize: "clamp(40px, 6vw, 60px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: 24
        };
        $[26] = t16;
        $[27] = t17;
        $[28] = t18;
        $[29] = t19;
    } else {
        t16 = $[26];
        t17 = $[27];
        t18 = $[28];
        t19 = $[29];
    }
    let t20;
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: t19,
            children: [
                "Fund Muslim businesses.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 479,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--primary)"
                    },
                    children: "Share in their success."
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 479,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "var(--secondary)",
                fontSize: 18,
                lineHeight: 1.65,
                marginBottom: 40,
                maxWidth: 520
            },
            children: "Asaan Fund connects investors with verified Muslim-owned SMEs seeking equity crowdfunding. No interest. No ambiguity. Just genuine partnership."
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t21;
    } else {
        t20 = $[30];
        t21 = $[31];
    }
    let t22;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#businesses-seeking-funding",
            className: "bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg text-sm no-underline text-center hover:opacity-90 active:scale-[0.98] transition-all duration-150",
            style: {
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: 10,
                fontSize: 14,
                textDecoration: "none"
            },
            children: "Start Investing"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            border: "1px solid rgba(221,232,226,0.40)",
            color: "var(--secondary)",
            fontWeight: 500,
            padding: "14px 28px",
            borderRadius: 10,
            fontSize: 14,
            textDecoration: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontFamily: "inherit"
        };
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== handleListBusiness) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hero-section",
            style: t14,
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    style: t16,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t17,
                        children: [
                            t18,
                            t20,
                            t21,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    t22,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleListBusiness,
                                        className: "border border-[rgba(221,232,226,0.40)] text-secondary font-medium px-7 py-3.5 rounded-lg text-sm no-underline bg-transparent cursor-pointer hover:bg-white/5 active:scale-[0.98] transition-all duration-150",
                                        style: t23,
                                        children: "List Your Business"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 184
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 530,
                                columnNumber: 141
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 530,
                        columnNumber: 109
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 530,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[34] = handleListBusiness;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    let t26;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-transition",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        t26 = {
            backgroundColor: "var(--background)",
            borderBottom: "1px solid var(--border)"
        };
        $[36] = t25;
        $[37] = t26;
    } else {
        t25 = $[36];
        t26 = $[37];
    }
    let t27;
    let t28;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t26,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8",
                style: {
                    paddingTop: 40,
                    paddingBottom: 40
                },
                children: STATS.map(_LandingPageSTATSMap)
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 553,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        t28 = {
            paddingTop: 96,
            paddingBottom: 96,
            paddingLeft: 24,
            paddingRight: 24
        };
        $[38] = t27;
        $[39] = t28;
    } else {
        t27 = $[38];
        t28 = $[39];
    }
    let t29;
    let t30;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            marginBottom: 48
        };
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--primary)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 12
                    },
                    children: "How It Works"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 575,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 36,
                        fontWeight: 800,
                        color: "var(--foreground)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1
                    },
                    children: "Simple steps to get started"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 582,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 575,
            columnNumber: 11
        }, this);
        $[40] = t29;
        $[41] = t30;
    } else {
        t29 = $[40];
        t30 = $[41];
    }
    let t31;
    let t32;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            backgroundColor: "var(--muted)",
            borderRadius: 10,
            padding: 4
        };
        t32 = [
            "investor",
            "business"
        ];
        $[42] = t31;
        $[43] = t32;
    } else {
        t31 = $[42];
        t32 = $[43];
    }
    let t33;
    if ($[44] !== activeTab) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
            style: t29,
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex self-start md:self-auto",
                    style: t31,
                    children: t32.map({
                        "LandingPage[(anonymous)()]": (tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "LandingPage[(anonymous)() > <button>.onClick]": ()=>setActiveTab(tab)
                                }["LandingPage[(anonymous)() > <button>.onClick]"],
                                style: {
                                    padding: "8px 20px",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    borderRadius: 8,
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.15s",
                                    backgroundColor: activeTab === tab ? "var(--accent)" : "transparent",
                                    color: activeTab === tab ? "var(--accent-foreground)" : "var(--muted-foreground)",
                                    fontFamily: "inherit"
                                },
                                children: tab === "investor" ? "As an Investor" : "As a Business"
                            }, tab, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 613,
                                columnNumber: 48
                            }, this)
                    }["LandingPage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 612,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 612,
            columnNumber: 11
        }, this);
        $[44] = activeTab;
        $[45] = t33;
    } else {
        t33 = $[45];
    }
    let t34;
    if ($[46] !== steps) {
        t34 = steps.map(_LandingPageStepsMap);
        $[46] = steps;
        $[47] = t34;
    } else {
        t34 = $[47];
    }
    let t35;
    if ($[48] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 643,
            columnNumber: 11
        }, this);
        $[48] = t34;
        $[49] = t35;
    } else {
        t35 = $[49];
    }
    let t36;
    if ($[50] !== t33 || $[51] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t28,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t33,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 651,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[50] = t33;
        $[51] = t35;
        $[52] = t36;
    } else {
        t36 = $[52];
    }
    let t37;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            paddingTop: 96,
            paddingBottom: 96,
            paddingLeft: 24,
            paddingRight: 24,
            backgroundColor: "rgba(221,232,226,0.35)"
        };
        $[53] = t37;
    } else {
        t37 = $[53];
    }
    let t38;
    let t39;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            marginBottom: 48
        };
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--primary)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 12
                    },
                    children: "Active Campaigns"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 677,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 36,
                        fontWeight: 800,
                        color: "var(--foreground)",
                        letterSpacing: "-0.03em"
                    },
                    children: "Businesses seeking funding"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 684,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 677,
            columnNumber: 11
        }, this);
        $[54] = t38;
        $[55] = t39;
    } else {
        t38 = $[54];
        t39 = $[55];
    }
    let t40;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
            style: t38,
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/dashboard/investor",
                    className: "text-accent text-sm font-semibold underline underline-offset-4 hover:opacity-80 active:scale-[0.98] transition-all duration-150",
                    style: {
                        color: "var(--accent)",
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: "underline",
                        textUnderlineOffset: 4
                    },
                    children: "View all listings →"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 698,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 698,
            columnNumber: 11
        }, this);
        $[56] = t40;
    } else {
        t40 = $[56];
    }
    let t41;
    if ($[57] !== businesses) {
        t41 = businesses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "var(--muted-foreground)",
                fontSize: 16,
                textAlign: "center",
                gridColumn: "1 / -1",
                padding: 40
            },
            children: "No businesses are currently seeking funding. Check back soon!"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 711,
            columnNumber: 37
        }, this) : businesses.map(_LandingPageBusinessesMap);
        $[57] = businesses;
        $[58] = t41;
    } else {
        t41 = $[58];
    }
    let t42;
    if ($[59] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "businesses-seeking-funding",
            className: "scroll-mt-16",
            style: t37,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: t41
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 725,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 725,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[59] = t41;
        $[60] = t42;
    } else {
        t42 = $[60];
    }
    let t43;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            paddingTop: 96,
            paddingBottom: 96,
            paddingLeft: 24,
            paddingRight: 24
        };
        $[61] = t43;
    } else {
        t43 = $[61];
    }
    let t44;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: 48
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--primary)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 12
                    },
                    children: "Why Asaan Fund"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 747,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 36,
                        fontWeight: 800,
                        color: "var(--foreground)",
                        letterSpacing: "-0.03em",
                        maxWidth: 480
                    },
                    children: "Built on trust, transparency, and Islamic principles"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 754,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, this);
        $[62] = t44;
    } else {
        t44 = $[62];
    }
    let t45;
    let t46;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t43,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t44,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-5",
                        children: TRUST_POINTS.map(_LandingPageTRUST_POINTSMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 768,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 768,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 768,
            columnNumber: 11
        }, this);
        t46 = {
            backgroundColor: "var(--accent)",
            paddingTop: 80,
            paddingBottom: 80,
            paddingLeft: 24,
            paddingRight: 24
        };
        $[63] = t45;
        $[64] = t46;
    } else {
        t45 = $[63];
        t46 = $[64];
    }
    let t47;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        color: "var(--accent-foreground)",
                        fontSize: "clamp(28px, 4vw, 38px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.15,
                        marginBottom: 12
                    },
                    children: "Ready to back a Muslim business?"
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 784,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--secondary)",
                        fontSize: 15,
                        maxWidth: 480,
                        lineHeight: 1.6
                    },
                    children: "Join thousands of investors growing wealth the halal way — sharing in the success of real businesses, not charging interest."
                }, void 0, false, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 791,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 784,
            columnNumber: 11
        }, this);
        $[65] = t47;
    } else {
        t47 = $[65];
    }
    let t48;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = {
            flexShrink: 0
        };
        $[66] = t48;
    } else {
        t48 = $[66];
    }
    let t49;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#businesses-seeking-funding",
            className: "bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg text-sm no-underline text-center hover:opacity-90 active:scale-[0.98] transition-all duration-150",
            style: {
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: 10,
                fontSize: 14,
                textDecoration: "none",
                textAlign: "center"
            },
            children: "Browse Businesses"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 812,
            columnNumber: 11
        }, this);
        $[67] = t49;
    } else {
        t49 = $[67];
    }
    let t50;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = {
            border: "1px solid rgba(221,232,226,0.40)",
            color: "var(--secondary)",
            fontWeight: 500,
            padding: "14px 28px",
            borderRadius: 10,
            fontSize: 14,
            textDecoration: "none",
            textAlign: "center",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontFamily: "inherit"
        };
        $[68] = t50;
    } else {
        t50 = $[68];
    }
    let t51;
    if ($[69] !== handleListBusiness) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t46,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",
                children: [
                    t47,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-3",
                        style: t48,
                        children: [
                            t49,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleListBusiness,
                                className: "border border-[rgba(221,232,226,0.40)] text-secondary font-medium px-7 py-3.5 rounded-lg text-sm no-underline bg-transparent cursor-pointer hover:bg-white/5 active:scale-[0.98] transition-all duration-150",
                                style: t50,
                                children: "List Your Business"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 847,
                                columnNumber: 199
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 847,
                        columnNumber: 133
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 847,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 847,
            columnNumber: 11
        }, this);
        $[69] = handleListBusiness;
        $[70] = t51;
    } else {
        t51 = $[70];
    }
    let t52;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = {
            backgroundColor: "#0e322f",
            paddingTop: 48,
            paddingBottom: 48,
            paddingLeft: 24,
            paddingRight: 24
        };
        $[71] = t52;
    } else {
        t52 = $[71];
    }
    let t53;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = {
            marginBottom: 40
        };
        $[72] = t53;
    } else {
        t53 = $[72];
    }
    let t54;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = {
            marginBottom: 16
        };
        $[73] = t54;
    } else {
        t54 = $[73];
    }
    let t55;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
            style: t53,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-2 md:col-span-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            style: t54,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center rounded-md",
                                    style: {
                                        width: 24,
                                        height: 24,
                                        backgroundColor: "var(--primary)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "white",
                                            fontSize: 10,
                                            fontWeight: 800
                                        },
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 890,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ui/landing-page.tsx",
                                    lineNumber: 886,
                                    columnNumber: 173
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "var(--accent-foreground)",
                                        fontWeight: 700,
                                        fontSize: 15
                                    },
                                    children: "Asaan Fund"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ui/landing-page.tsx",
                                    lineNumber: 894,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ui/landing-page.tsx",
                            lineNumber: 886,
                            columnNumber: 120
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "rgba(221,232,226,0.65)",
                                fontSize: 13,
                                lineHeight: 1.6
                            },
                            children: "Halal equity crowdfunding for Muslim-owned small and medium businesses."
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/landing-page.tsx",
                            lineNumber: 898,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ui/landing-page.tsx",
                    lineNumber: 886,
                    columnNumber: 78
                }, this),
                [
                    {
                        title: "Platform",
                        links: [
                            "Browse Businesses",
                            "How It Works",
                            "Pricing",
                            "For Investors"
                        ]
                    },
                    {
                        title: "Company",
                        links: [
                            "About Us",
                            "Shariah Compliance",
                            "Legal",
                            "Contact"
                        ]
                    },
                    {
                        title: "Resources",
                        links: [
                            "Blog",
                            "FAQ",
                            "Investor Guide",
                            "Business Guide"
                        ]
                    }
                ].map(_LandingPageAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 886,
            columnNumber: 11
        }, this);
        $[74] = t55;
    } else {
        t55 = $[74];
    }
    let t56;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            style: t52,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t55,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-3",
                        style: {
                            borderTop: "1px solid rgba(221,232,226,0.10)",
                            paddingTop: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(221,232,226,0.45)",
                                    fontSize: 12
                                },
                                children: "© 2026 Asaan Fund. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 921,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(221,232,226,0.45)",
                                    fontSize: 12
                                },
                                children: "Investments involve risk. Capital at risk. Not financial advice."
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 924,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 918,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 918,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 918,
            columnNumber: 11
        }, this);
        $[75] = t56;
    } else {
        t56 = $[75];
    }
    let t57;
    if ($[76] !== t13 || $[77] !== t24 || $[78] !== t36 || $[79] !== t42 || $[80] !== t51) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: [
                t13,
                t24,
                t25,
                t27,
                t36,
                t42,
                t45,
                t51,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 934,
            columnNumber: 11
        }, this);
        $[76] = t13;
        $[77] = t24;
        $[78] = t36;
        $[79] = t42;
        $[80] = t51;
        $[81] = t57;
    } else {
        t57 = $[81];
    }
    return t57;
}
_s(LandingPage, "ZgUK+MwjNbXpbLFjuXi4le0RlOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = LandingPage;
function _LandingPageAnonymous(col) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                style: {
                    color: "var(--accent-foreground)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 16
                },
                children: col.title
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 947,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                children: col.links.map(_LandingPageAnonymousColLinksMap)
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 954,
                columnNumber: 24
            }, this)
        ]
    }, col.title, true, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 947,
        columnNumber: 10
    }, this);
}
function _LandingPageAnonymousColLinksMap(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            style: {
                color: "rgba(221,232,226,0.65)",
                fontSize: 13,
                textDecoration: "none"
            },
            children: l
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 964,
            columnNumber: 22
        }, this)
    }, l, false, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 964,
        columnNumber: 10
    }, this);
}
function _LandingPageTRUST_POINTSMap(tp) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-5",
        style: {
            backgroundColor: "color-mix(in srgb, var(--secondary) 50%, transparent)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: 28
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 28,
                    lineHeight: 1,
                    marginTop: 2
                },
                children: tp.icon
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 976,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontWeight: 700,
                            color: "var(--foreground)",
                            marginBottom: 8,
                            fontSize: 15
                        },
                        children: tp.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 980,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 13,
                            color: "var(--muted-foreground)",
                            lineHeight: 1.65
                        },
                        children: tp.desc
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 985,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 980,
                columnNumber: 23
            }, this)
        ]
    }, tp.title, true, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 971,
        columnNumber: 10
    }, this);
}
function _LandingPageBusinessesMap(biz) {
    const tag = biz.percentFunded > 80 ? "Closing Soon" : biz.percentFunded === 0 ? "New" : "Featured";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.2s"
        },
        onMouseEnter: _LandingPageBusinessesMapDivOnMouseEnter,
        onMouseLeave: _LandingPageBusinessesMapDivOnMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: 200,
                    backgroundColor: "var(--muted)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: biz.imageUrl ?? "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format",
                        alt: biz.name,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1005,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 12,
                            left: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagBadge, {
                            tag: tag
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/landing-page.tsx",
                            lineNumber: 1013,
                            columnNumber: 10
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1009,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1001,
                columnNumber: 118
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-2",
                        style: {
                            marginBottom: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontWeight: 700,
                                    color: "var(--foreground)",
                                    fontSize: 15,
                                    lineHeight: 1.3
                                },
                                children: biz.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1020,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted-foreground)",
                                    whiteSpace: "nowrap"
                                },
                                children: biz.location
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1025,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1018,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            color: "var(--primary)",
                            fontWeight: 600,
                            marginBottom: 12
                        },
                        children: biz.category
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1029,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 13,
                            color: "var(--muted-foreground)",
                            lineHeight: 1.6,
                            marginBottom: 16,
                            flex: 1,
                            minHeight: 62
                        },
                        children: biz.tagline
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1034,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                        raised: biz.raised,
                        target: biz.fundingTarget
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1041,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 text-center",
                        style: {
                            marginTop: 12,
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "var(--foreground)",
                                            fontVariantNumeric: "tabular-nums"
                                        },
                                        children: [
                                            "$",
                                            biz.raised.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "var(--muted-foreground)"
                                        },
                                        children: "raised"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1044,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "var(--foreground)",
                                            fontVariantNumeric: "tabular-nums"
                                        },
                                        children: [
                                            biz.percentFunded,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 1052,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "var(--muted-foreground)"
                                        },
                                        children: "of goal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 1057,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1052,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "var(--foreground)",
                                            fontVariantNumeric: "tabular-nums"
                                        },
                                        children: biz.investorCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "var(--muted-foreground)"
                                        },
                                        children: "investors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ui/landing-page.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1060,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1041,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted-foreground)"
                                },
                                children: [
                                    biz.investorCount,
                                    " investors · ",
                                    biz.equityOffered,
                                    "% equity"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1068,
                                columnNumber: 92
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/invest/${biz.id}`,
                                className: "bg-primary text-primary-foreground font-semibold text-xs px-4 py-1.5 rounded-lg no-underline text-center hover:opacity-90 active:scale-[0.98] transition-all duration-150",
                                style: {
                                    backgroundColor: "var(--primary)",
                                    color: "var(--primary-foreground)",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    padding: "7px 16px",
                                    borderRadius: 8,
                                    textDecoration: "none"
                                },
                                children: "Invest Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/landing-page.tsx",
                                lineNumber: 1071,
                                columnNumber: 78
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/landing-page.tsx",
                        lineNumber: 1068,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1013,
                columnNumber: 44
            }, this)
        ]
    }, biz.id, true, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 993,
        columnNumber: 10
    }, this);
}
function _LandingPageBusinessesMapDivOnMouseLeave(e_2) {
    return e_2.currentTarget.style.boxShadow = "none";
}
function _LandingPageBusinessesMapDivOnMouseEnter(e_1) {
    return e_1.currentTarget.style.boxShadow = "0 4px 24px rgba(18,62,58,0.10)";
}
function _LandingPageStepsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: 28
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 48,
                    fontWeight: 800,
                    color: "var(--secondary)",
                    marginBottom: 20,
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums"
                },
                children: item.step
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1093,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: 10
                },
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1100,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 14,
                    color: "var(--muted-foreground)",
                    lineHeight: 1.65
                },
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1105,
                columnNumber: 25
            }, this)
        ]
    }, item.step, true, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 1088,
        columnNumber: 10
    }, this);
}
function _LandingPageSTATSMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 30,
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                    fontVariantNumeric: "tabular-nums"
                },
                children: s.value
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1112,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    color: "var(--muted-foreground)",
                    fontWeight: 500,
                    marginTop: 4
                },
                children: s.label
            }, void 0, false, {
                fileName: "[project]/src/app/ui/landing-page.tsx",
                lineNumber: 1118,
                columnNumber: 23
            }, this)
        ]
    }, s.label, true, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 1112,
        columnNumber: 10
    }, this);
}
function _LandingPageNAV_LINKSMap2(link_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#",
        style: {
            color: "var(--secondary)",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            paddingTop: 4,
            paddingBottom: 4
        },
        children: link_0
    }, link_0, false, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 1126,
        columnNumber: 10
    }, this);
}
function _LandingPageButtonOnClickSetMobileOpen(o) {
    return !o;
}
function _LandingPageNAV_LINKSMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            style: {
                color: "var(--secondary)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.15s"
            },
            onMouseEnter: _LandingPageNAV_LINKSMapAOnMouseEnter,
            onMouseLeave: _LandingPageNAV_LINKSMapAOnMouseLeave,
            children: link
        }, void 0, false, {
            fileName: "[project]/src/app/ui/landing-page.tsx",
            lineNumber: 1139,
            columnNumber: 25
        }, this)
    }, link, false, {
        fileName: "[project]/src/app/ui/landing-page.tsx",
        lineNumber: 1139,
        columnNumber: 10
    }, this);
}
function _LandingPageNAV_LINKSMapAOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "var(--secondary)";
}
function _LandingPageNAV_LINKSMapAOnMouseEnter(e) {
    return e.currentTarget.style.color = "#fff";
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProgressBar");
__turbopack_context__.k.register(_c1, "TagBadge");
__turbopack_context__.k.register(_c2, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1ty14k6._.js.map