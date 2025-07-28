(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/admininventary/inventory.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const inventoryData = [
    {
        name: 'Single bed',
        barcode: 'INV-BED-A101-1',
        category: 'Bedding',
        location: 'Room-A-101',
        status: 'In Use'
    },
    {
        name: 'Study Chair',
        barcode: 'INV-CHR-A101-1',
        category: 'Furniture',
        location: 'Room-A-101',
        status: 'Available'
    },
    {
        name: 'Ceiling Fan',
        barcode: 'INV-FAN-A101-1',
        category: 'Electronics',
        location: 'Room-A-101',
        status: 'In maintenance'
    },
    {
        name: 'Wardrobe',
        barcode: 'INV-WAR-A101-1',
        category: 'Furniture',
        location: 'Room-A-101',
        status: 'In Use'
    },
    {
        name: 'Water Heater',
        barcode: 'INV-WHT-A101-1',
        category: 'Applications',
        location: 'Room-A-101',
        status: 'Damaged'
    },
    {
        name: 'Wardrobe',
        barcode: 'INV-WAR-A101-2',
        category: 'Furniture',
        location: 'Room-A-101',
        status: 'In Use'
    },
    {
        name: 'Water Heater',
        barcode: 'INV-WHT-A101-2',
        category: 'Applications',
        location: 'Room-A-101',
        status: 'Damaged'
    }
];
const statusColor = {
    'In Use': 'bg-[#f5a623] text-white',
    'Available': 'bg-[#25d366] text-white',
    'In maintenance': 'bg-[#d6d6c2] text-black',
    'Damaged': 'bg-[#ff3b30] text-white'
};
const InventoryList = ()=>{
    _s();
    const [visibleRows, setVisibleRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [editRows, setEditRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [editData, setEditData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All Status');
    const handleToggleVisible = (barcode)=>{
        setVisibleRows((prev)=>({
                ...prev,
                [barcode]: !prev[barcode]
            }));
    };
    const handleEditClick = (item)=>{
        setEditRows((prev)=>({
                ...prev,
                [item.barcode]: true
            }));
        setEditData((prev)=>({
                ...prev,
                [item.barcode]: {
                    ...item
                }
            }));
    };
    const handleEditChange = (barcode, field, value)=>{
        setEditData((prev)=>({
                ...prev,
                [barcode]: {
                    ...prev[barcode],
                    [field]: value
                }
            }));
    };
    const handleEditSave = (barcode)=>{
        const idx = inventoryData.findIndex((item)=>item.barcode === barcode);
        if (idx !== -1) inventoryData[idx] = {
            ...editData[barcode]
        };
        setEditRows((prev)=>({
                ...prev,
                [barcode]: false
            }));
    };
    const handleEditCancel = (barcode)=>{
        setEditRows((prev)=>({
                ...prev,
                [barcode]: false
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#f0f2f5] min-h-screen py-6 px-3 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-between gap-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-black border-l-4 border-red-500 pl-2",
                            children: "Inventory List"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-4 py-2 rounded-md shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUpload"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Upload Receipt"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 bg-white border border-gray-300 text-black text-sm font-medium px-4 py-2 rounded-md shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Monthly Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-4 py-2 rounded-md shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {}, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Add Item"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row flex-wrap gap-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1 min-w-[250px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full border border-gray-300 bg-[#f5f5f5] rounded-md pl-10 pr-4 py-2 text-sm",
                                    placeholder: "Search by Item Name or Barcode ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-black",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {}, void 0, false, {
                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "border border-gray-300 bg-[#f5f5f5] rounded-md px-4 py-2 text-sm shadow-sm",
                            value: statusFilter,
                            onChange: (e)=>setStatusFilter(e.target.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "All Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "In Use"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Available"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "In maintenance"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Damaged"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "border border-gray-300 bg-[#f5f5f5] rounded-md px-4 py-2 text-sm shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "All Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Bedding"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Furniture"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Electronics"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Applications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full min-w-[700px] text-left border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-[#A4B494] text-black text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 border-r border-black rounded-tl-lg",
                                            children: "Item Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 border-r border-black",
                                            children: "Barcode ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 border-r border-black",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 border-r border-black",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 border-r border-black",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-center rounded-tr-lg",
                                            children: "Action"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "text-gray-800 text-sm bg-white",
                                children: inventoryData.filter((item)=>statusFilter === 'All Status' || item.status === statusFilter).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50",
                                            children: editRows[item.barcode] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "border rounded px-2 py-1 w-full text-sm",
                                                            value: editData[item.barcode].name,
                                                            onChange: (e)=>handleEditChange(item.barcode, 'name', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                            lineNumber: 131,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 130,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "border rounded px-2 py-1 w-full text-sm",
                                                            value: editData[item.barcode].barcode,
                                                            onChange: (e)=>handleEditChange(item.barcode, 'barcode', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "border rounded px-2 py-1 w-full text-sm",
                                                            value: editData[item.barcode].category,
                                                            onChange: (e)=>handleEditChange(item.barcode, 'category', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "border rounded px-2 py-1 w-full text-sm",
                                                            value: editData[item.barcode].location,
                                                            onChange: (e)=>handleEditChange(item.barcode, 'location', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-[100px] py-[6px] text-center text-xs font-semibold rounded-lg shadow-sm ".concat(statusColor[editData[item.barcode].status]),
                                                            value: editData[item.barcode].status,
                                                            onChange: (e)=>handleEditChange(item.barcode, 'status', e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "In Use",
                                                                    children: "In Use"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Available",
                                                                    children: "Available"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "In maintenance",
                                                                    children: "In maintenance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Damaged",
                                                                    children: "Damaged"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 flex justify-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-green-600 hover:text-green-800 font-semibold",
                                                                onClick: ()=>handleEditSave(item.barcode),
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                lineNumber: 185,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-gray-600 hover:text-red-600 font-semibold",
                                                                onClick: ()=>handleEditCancel(item.barcode),
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                lineNumber: 191,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: item.barcode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 202,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: item.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 203,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: item.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 204,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-[100px] py-[6px] text-center text-xs font-semibold rounded-lg shadow-sm ".concat(statusColor[item.status]),
                                                            children: item.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                            lineNumber: 206,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 205,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 flex justify-center items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                title: "View",
                                                                className: "text-gray-600 hover:text-blue-600 ".concat(visibleRows[item.barcode] ? 'text-blue-600' : ''),
                                                                onClick: ()=>handleToggleVisible(item.barcode),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                lineNumber: 213,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[1px] h-5 bg-black"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                title: "Edit",
                                                                className: "text-gray-600 hover:text-green-600",
                                                                onClick: ()=>handleEditClick(item),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPen"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                                lineNumber: 223,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                                        lineNumber: 212,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.barcode, false, {
                                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/admininventary/inventory.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/admininventary/inventory.jsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/admininventary/inventory.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InventoryList, "QkECnN51mByJhtSdVMR+eFD1l1M=");
_c = InventoryList;
const __TURBOPACK__default__export__ = InventoryList;
var _c;
__turbopack_context__.k.register(_c, "InventoryList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/newitem/newitem.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddNewItem() {
    _s();
    const dateInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        itemName: "",
        location: "",
        barcodeId: "",
        status: "",
        category: "",
        description: "",
        purchaseDate: "",
        purchaseCost: "",
        receipt: null
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleFileChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                receipt: e.target.files[0]
            }));
    };
    const handleCancel = ()=>{
        setFormData({
            itemName: "",
            location: "",
            barcodeId: "",
            status: "",
            category: "",
            description: "",
            purchaseDate: "",
            purchaseCost: "",
            receipt: null
        });
    };
    const handleGenerateQR = ()=>{
        console.log("Generate QR Code for:", formData.itemName);
    // QR code generation logic here
    };
    const handleSaveItem = ()=>{
        console.log("Saving item:", formData);
    // Save item logic here
    };
    const labelStyle = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "clamp(18px, 2.5vw, 25px)",
        lineHeight: "1.5",
        textAlign: "left",
        color: "#000000",
        display: "block",
        marginBottom: "8px"
    };
    const inputStyle = {
        width: "100%",
        height: "51px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        color: "#000000",
        outline: "none",
        border: "none",
        padding: "0 16px",
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: "400",
        lineHeight: "1.2",
        letterSpacing: "normal"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white p-3 sm:p-4 md:p-6 lg:p-8",
        style: {
            backgroundColor: "#FFFFFF"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-black flex items-center",
                    style: {
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontStyle: "normal",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1 h-8 sm:h-10 md:h-12 bg-red-500 mr-2 sm:mr-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Add new Item"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "#BEC5AD",
                        boxShadow: "0px 4px 20px 0px #00000040 inset",
                        borderRadius: "20px"
                    },
                    className: "jsx-506d2ed743299e4e" + " " + "rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-506d2ed743299e4e" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "itemName",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Item Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "itemName",
                                            type: "text",
                                            name: "itemName",
                                            value: formData.itemName,
                                            onChange: handleInputChange,
                                            style: inputStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "location",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "location",
                                            type: "text",
                                            name: "location",
                                            value: formData.location,
                                            onChange: handleInputChange,
                                            style: inputStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "barcodeId",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Barcode ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "barcodeId",
                                            type: "text",
                                            name: "barcodeId",
                                            value: formData.barcodeId,
                                            onChange: handleInputChange,
                                            style: inputStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-506d2ed743299e4e" + " " + "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "status",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "status",
                                            name: "status",
                                            value: formData.status,
                                            onChange: handleInputChange,
                                            style: {
                                                fontFamily: "Poppins",
                                                fontWeight: 500,
                                                border: "none",
                                                height: "51px",
                                                paddingLeft: "48px",
                                                paddingRight: "16px",
                                                color: formData.status ? "#000000" : "#6B7280",
                                                width: "100%",
                                                borderRadius: "10px"
                                            },
                                            className: "jsx-506d2ed743299e4e" + " " + "appearance-none w-full px-12 py-3 rounded-xl text-gray-800 bg-white font-medium text-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    style: {
                                                        color: "#9CA3AF"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Select Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "active",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "inactive",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Inactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "maintenance",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Maintenance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "disposed",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Disposed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            style: {
                                                top: "calc(60% + 12px)",
                                                transform: "translateY(-50%)"
                                            },
                                            className: "jsx-506d2ed743299e4e" + " " + "w-4 h-4 text-gray-600 absolute right-15 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7",
                                                className: "jsx-506d2ed743299e4e"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-506d2ed743299e4e" + " " + "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "category",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "category",
                                            name: "category",
                                            value: formData.category,
                                            onChange: handleInputChange,
                                            style: {
                                                fontFamily: "Poppins",
                                                fontWeight: 500,
                                                border: "none",
                                                height: "51px",
                                                paddingLeft: "40px",
                                                paddingRight: "48px",
                                                color: formData.category ? "#000000" : "#6B7280",
                                                width: "100%",
                                                borderRadius: "10px"
                                            },
                                            className: "jsx-506d2ed743299e4e" + " " + "appearance-none w-full px-12 py-3 rounded-xl text-gray-800 bg-white font-medium text-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    style: {
                                                        color: "#9CA3AF"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Select Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "electronics",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Electronics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "furniture",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Furniture"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "office-supplies",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Office Supplies"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "equipment",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Equipment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "vehicles",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-506d2ed743299e4e",
                                                    children: "Vehicles"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            style: {
                                                top: "calc(60% + 12px)",
                                                transform: "translateY(-50%)"
                                            },
                                            className: "jsx-506d2ed743299e4e" + " " + "w-4 h-4 text-gray-600 absolute right-15 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7",
                                                className: "jsx-506d2ed743299e4e"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-506d2ed743299e4e" + " " + "mt-6 sm:mt-8 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "description",
                                    style: labelStyle,
                                    className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Description (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "description",
                                    name: "description",
                                    value: formData.description,
                                    onChange: handleInputChange,
                                    rows: 3,
                                    style: {
                                        width: "100%",
                                        height: "91px",
                                        backgroundColor: "#FFFFFF",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "10px",
                                        color: "#000000",
                                        outline: "none",
                                        border: "none",
                                        padding: "12px 16px",
                                        fontSize: "14px",
                                        fontFamily: "Poppins",
                                        resize: "none"
                                    },
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-506d2ed743299e4e" + " " + "mt-6 sm:mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        zIndex: 1000
                                    },
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full mb-4 sm:mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "purchaseDate",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Purchase Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-506d2ed743299e4e" + " " + "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "purchaseDate",
                                                    ref: dateInputRef,
                                                    type: "date",
                                                    name: "purchaseDate",
                                                    value: formData.purchaseDate,
                                                    onChange: handleInputChange,
                                                    style: {
                                                        backgroundColor: "#FFFFFF",
                                                        fontFamily: "Poppins",
                                                        fontWeight: 500,
                                                        fontSize: "18px",
                                                        lineHeight: "100%",
                                                        letterSpacing: "64%",
                                                        textAlign: "center",
                                                        color: formData.purchaseDate ? "#000000" : "#6B7280",
                                                        width: "100%",
                                                        maxWidth: "290px",
                                                        height: "40px",
                                                        borderRadius: "10px",
                                                        position: "relative",
                                                        zIndex: 1001,
                                                        outline: "none",
                                                        boxShadow: "0px 4px 10px 0px #00000040"
                                                    },
                                                    className: "jsx-506d2ed743299e4e" + " " + "px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "30",
                                                    height: "30",
                                                    viewBox: "0 0 30 30",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    onClick: ()=>{
                                                        if (dateInputRef.current) {
                                                            dateInputRef.current.scrollIntoView({
                                                                behavior: "smooth",
                                                                block: "center"
                                                            });
                                                            setTimeout(()=>{
                                                                dateInputRef.current.focus();
                                                                if (dateInputRef.current.showPicker) {
                                                                    dateInputRef.current.showPicker();
                                                                }
                                                            }, 300);
                                                        }
                                                    },
                                                    className: "jsx-506d2ed743299e4e" + " " + "flex-shrink-0 self-start sm:self-center cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                            id: "mask0_219_909",
                                                            style: {
                                                                maskType: "alpha"
                                                            },
                                                            maskUnits: "userSpaceOnUse",
                                                            x: "0",
                                                            y: "0",
                                                            width: "30",
                                                            height: "30",
                                                            className: "jsx-506d2ed743299e4e",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "30",
                                                                height: "30",
                                                                fill: "#D9D9D9",
                                                                className: "jsx-506d2ed743299e4e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                                lineNumber: 399,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                            lineNumber: 390,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            mask: "url(#mask0_219_909)",
                                                            className: "jsx-506d2ed743299e4e",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6.25 27.5C5.5625 27.5 4.97396 27.2552 4.48438 26.7656C3.99479 26.276 3.75 25.6875 3.75 25V7.5C3.75 6.8125 3.99479 6.22396 4.48438 5.73438C4.97396 5.24479 5.5625 5 6.25 5H7.5V2.5H10V5H20V2.5H22.5V5H23.75C24.4375 5 25.026 5.24479 25.5156 5.73438C26.0052 6.22396 26.25 6.8125 26.25 7.5V25C26.25 25.6875 26.0052 26.276 25.5156 26.7656C25.026 27.2552 24.4375 27.5 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25ZM6.25 10H23.75V7.5H6.25V10ZM15 17.5C14.6458 17.5 14.349 17.3802 14.1094 17.1406C13.8698 16.901 13.75 16.6042 13.75 16.25C13.75 15.8958 13.8698 15.599 14.1094 15.3594C14.349 15.1198 14.6458 15 15 15C15.3542 15 15.651 15.1198 15.8906 15.3594C16.1302 15.599 16.25 15.8958 16.25 16.25C16.25 16.6042 16.1302 16.901 15.8906 17.1406C15.651 17.3802 15.3542 17.5 15 17.5ZM10 17.5C9.64583 17.5 9.34896 17.3802 9.10938 17.1406C8.86979 16.901 8.75 16.6042 8.75 16.25C8.75 15.8958 8.86979 15.599 9.10938 15.3594C9.34896 15.1198 9.64583 15 10 15C10.3542 15 10.651 15.1198 10.8906 15.3594C11.1302 15.599 11.25 15.8958 11.25 16.25C11.25 16.6042 11.1302 16.901 10.8906 17.1406C10.651 17.3802 10.3542 17.5 10 17.5ZM20 17.5C19.6458 17.5 19.349 17.3802 19.1094 17.1406C18.8698 16.901 18.75 16.6042 18.75 16.25C18.75 15.8958 18.8698 15.599 19.1094 15.3594C19.349 15.1198 19.6458 15 20 15C20.3542 15 20.651 15.1198 20.8906 15.3594C21.1302 15.599 21.25 15.8958 21.25 16.25C21.25 16.6042 21.1302 16.901 20.8906 17.1406C20.651 17.3802 20.3542 17.5 20 17.5ZM15 22.5C14.6458 22.5 14.349 22.3802 14.1094 22.1406C13.8698 21.901 13.75 21.6042 13.75 21.25C13.75 20.8958 13.8698 20.599 14.1094 20.3594C14.349 20.1198 14.6458 20 15 20C15.3542 20 15.651 20.1198 15.8906 20.3594C16.1302 20.599 16.25 20.8958 16.25 21.25C16.25 21.6042 16.1302 16.901 15.8906 22.1406C15.651 22.3802 15.3542 22.5 15 22.5ZM10 22.5C9.64583 22.5 9.34896 22.3802 9.10938 22.1406C8.86979 21.901 8.75 21.6042 8.75 21.25C8.75 20.8958 8.86979 20.599 9.10938 20.3594C9.34896 20.1198 9.64583 20 10 20C10.3542 20 10.651 20.1198 10.8906 20.3594C11.1302 20.599 11.25 20.8958 11.25 21.25C11.25 21.6042 11.1302 21.901 10.8906 22.1406C10.651 22.3802 10.3542 22.5 10 22.5ZM20 22.5C19.6458 22.5 19.349 22.3802 19.1094 22.1406C18.8698 21.901 18.75 21.6042 18.75 21.25C18.75 20.8958 18.8698 20.599 19.1094 20.3594C19.349 20.1198 19.6458 20 20 20C20.3542 20 20.651 20.1198 20.8906 20.3594C21.1302 20.599 21.25 20.8958 21.25 21.25C21.25 21.6042 21.1302 21.901 20.8906 22.1406C20.651 22.3802 20.3542 22.5 20 22.5Z",
                                                                fill: "#1C1B1F",
                                                                className: "jsx-506d2ed743299e4e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                                lineNumber: 402,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                            lineNumber: 401,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "purchaseCost",
                                            style: labelStyle,
                                            className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Purchase Cost (INR)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "purchaseCost",
                                            type: "number",
                                            name: "purchaseCost",
                                            value: formData.purchaseCost,
                                            onChange: handleInputChange,
                                            style: {
                                                backgroundColor: "#FFFFFF",
                                                color: "#000000",
                                                width: "100%",
                                                maxWidth: "290px",
                                                height: "40px",
                                                borderRadius: "10px",
                                                outline: "none",
                                                boxShadow: "0px 4px 10px 0px #00000040",
                                                fontFamily: "Poppins",
                                                fontSize: "14px",
                                                padding: "0 16px"
                                            },
                                            className: "jsx-506d2ed743299e4e" + " " + "w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-506d2ed743299e4e" + " " + "mt-6 sm:mt-8 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "receipt",
                                    style: labelStyle,
                                    className: "jsx-506d2ed743299e4e" + " " + "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Upload Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "receipt",
                                    type: "file",
                                    onChange: handleFileChange,
                                    accept: "image/*,.pdf",
                                    style: {
                                        backgroundColor: "#FFFFFF",
                                        color: "#000000",
                                        width: "100%",
                                        maxWidth: "290px",
                                        height: "45px",
                                        borderRadius: "10px",
                                        borderColor: "#877575",
                                        outline: "none",
                                        boxShadow: "0px 4px 10px 0px #00000040",
                                        fontFamily: "Poppins",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "clamp(14px, 2vw, 20px)",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        textAlign: "center"
                                    },
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full sm:w-auto py-2 px-3 border focus:outline-none text-black file:mr-3 file:py-1 file:px-3 file:rounded file:border file:text-sm file:font-medium file:bg-white file:text-black hover:file:bg-gray-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-506d2ed743299e4e" + " " + "flex flex-col sm:flex-row flex-wrap gap-3 mt-8 sm:mt-10 sm:justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancel,
                                    style: {
                                        outline: "none",
                                        fontFamily: "Poppins",
                                        fontWeight: 600,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        textAlign: "center"
                                    },
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 text-black bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGenerateQR,
                                    style: {
                                        outline: "none",
                                        fontFamily: "Poppins",
                                        fontWeight: 600,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        textAlign: "center"
                                    },
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full sm:w-auto px-4 sm:px-6 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors",
                                    children: "Generate QR Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveItem,
                                    style: {
                                        outline: "none",
                                        fontFamily: "Poppins",
                                        fontWeight: 600,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        textAlign: "center"
                                    },
                                    className: "jsx-506d2ed743299e4e" + " " + "w-full sm:w-auto px-4 sm:px-6 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors",
                                    children: "Save Item"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "506d2ed743299e4e",
                            children: "*{outline:none!important}html,body{margin:0;padding:0;background-color:#fff!important}input:focus,select:focus,textarea:focus,button:focus{box-shadow:none!important;outline:none!important}input[type=text]:focus,input[type=number]:focus,input[type=date]:focus,select:focus,textarea:focus{border:2px solid #6b7280!important;outline:none!important}input[type=file]:focus{border:2px solid #877575!important;outline:none!important}input[type=date]::-webkit-calendar-picker-indicator{-webkit-appearance:none;display:none}input[type=date]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=date]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=text],input[type=number],textarea{caret-color:#000!important;font-size:14px!important;font-weight:400!important;line-height:normal!important}input[type=text]#location,input[type=text]#itemName,input[type=text]#barcodeId{letter-spacing:normal!important;font-family:Poppins,sans-serif!important;font-size:14px!important;font-weight:400!important;line-height:1.2!important}input[type=text],input[type=number],textarea{-moz-text-size-adjust:100%!important;text-size-adjust:100%!important}@media (max-width:640px){.grid{gap:1rem!important}}@media (max-width:480px){input,select,textarea{font-size:16px!important}}"
                        }, void 0, false, void 0, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/newitem/newitem.jsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/newitem/newitem.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(AddNewItem, "71WccqeS1kyw0j7akulpAsMWS18=");
_c = AddNewItem;
const __TURBOPACK__default__export__ = AddNewItem;
var _c;
__turbopack_context__.k.register(_c, "AddNewItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_25b2ae00._.js.map