module.exports = {

"[project]/src/app/components/management/management.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const StudentManagement = ()=>{
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        studentName: "",
        studentId: "",
        contactNumber: "",
        email: "",
        roomBed: "",
        emergencyContact: "",
        admissionDate: "",
        emergencyContactName: "",
        feeStatus: ""
    });
    const dateInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [editingStudent, setEditingStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "STU-001",
            name: "Shahid Ansari",
            room: "Room-A-101",
            contact: "+91 8888888888",
            feeStatus: "In Use",
            dues: "₹ 2,000/-"
        },
        {
            id: "STU-002",
            name: "Ayesha Khan",
            room: "Room-A-101",
            contact: "+91 8888888888",
            feeStatus: "Available",
            dues: "₹ 2,000/-"
        },
        {
            id: "STU-003",
            name: "Awab Fakih",
            room: "Room-A-101",
            contact: "+91 8888888888",
            feeStatus: "In maintenance",
            dues: "₹ 2,000/-"
        },
        {
            id: "STU-004",
            name: "Fatima Zahira",
            room: "Room-A-101",
            contact: "+91 8888888888",
            feeStatus: "In Use",
            dues: "₹ 2,000/-"
        },
        {
            id: "STU-005",
            name: "Fatima Zahira",
            room: "Room-A-101",
            contact: "+91 8888888888",
            feeStatus: "In Use",
            dues: "₹ 2,000/-"
        }
    ]);
    // Simple input change handler
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Reset form
    const resetForm = ()=>{
        setFormData({
            studentName: "",
            studentId: "",
            contactNumber: "",
            email: "",
            roomBed: "",
            emergencyContact: "",
            admissionDate: "",
            emergencyContactName: "",
            feeStatus: ""
        });
        setEditingStudent(null);
    };
    // Submit handler
    const handleSubmit = ()=>{
        if (!formData.studentName || !formData.studentId || !formData.contactNumber || !formData.email) {
            alert("Please fill all required fields");
            return;
        }
        const newStudent = {
            id: formData.studentId,
            name: formData.studentName,
            room: formData.roomBed || "Not Assigned",
            contact: formData.contactNumber,
            feeStatus: formData.feeStatus === "Paid" ? "Available" : "In Use",
            dues: "₹ 0/-"
        };
        setStudents((prev)=>[
                ...prev,
                newStudent
            ]);
        resetForm();
        alert("Student registered successfully!");
    };
    // Edit handler
    const handleEdit = (studentId)=>{
        const student = students.find((s)=>s.id === studentId);
        if (student) {
            setFormData({
                studentName: student.name,
                studentId: student.id,
                contactNumber: student.contact,
                email: "",
                roomBed: student.room,
                emergencyContact: "",
                admissionDate: "",
                emergencyContactName: "",
                feeStatus: student.feeStatus === "Available" ? "Paid" : "Unpaid"
            });
            setEditingStudent(studentId);
        }
    };
    // Update handler
    const handleUpdate = ()=>{
        if (!formData.studentName || !formData.studentId || !formData.contactNumber) {
            alert("Please fill all required fields");
            return;
        }
        setStudents((prev)=>prev.map((student)=>student.id === editingStudent ? {
                    ...student,
                    name: formData.studentName,
                    contact: formData.contactNumber,
                    room: formData.roomBed || student.room,
                    feeStatus: formData.feeStatus === "Paid" ? "Available" : "In Use"
                } : student));
        resetForm();
        alert("Student updated successfully!");
    };
    // View handler
    const handleView = (studentId)=>{
        const student = students.find((s)=>s.id === studentId);
        if (student) {
            alert(`Student Details:\nID: ${student.id}\nName: ${student.name}\nRoom: ${student.room}\nContact: ${student.contact}\nFee Status: ${student.feeStatus}\nDues: ${student.dues}`);
        }
    };
    // Calendar click handler
    const handleCalendarClick = ()=>{
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };
    // Fee status style
    const getFeeStatusStyle = (status)=>({
            width: "100px",
            height: "26px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            fontFamily: "Poppins",
            fontWeight: "600",
            textAlign: "center",
            background: status === "In Use" ? "#FF9D00" : status === "Available" ? "#22C55E" : "#FFFFFF",
            color: status === "In Use" ? "#FFFFFF" : status === "Available" ? "#FFFFFF" : "#000000",
            fontSize: "12px",
            lineHeight: "16px"
        });
    // Input field style
    const inputStyle = {
        height: "40px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        color: "#000000",
        border: "none",
        outline: "none"
    };
    // Label style
    const labelStyle = {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "100%",
        textAlign: "left"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 lg:p-10 bg-white min-h-screen",
        style: {
            fontFamily: "Poppins",
            fontWeight: "500"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto mb-8 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[25px] leading-[25px] font-extrabold text-[#000000] text-left",
                    style: {
                        fontFamily: "Inter"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "border-l-4 border-red-500 pl-2 inline-flex items-center h-[25px]",
                        children: "Student Management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/management/management.jsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/management/management.jsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/management/management.jsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#BEC5AD] rounded-[20px] p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto",
                style: {
                    boxShadow: "0px 4px 20px 0px #00000040 inset"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 sm:mb-6",
                        style: {
                            fontFamily: "Inter",
                            fontWeight: "700"
                        },
                        children: "Register New Student & Allot Bed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/management/management.jsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-1 text-black ml-2",
                                        style: labelStyle,
                                        children: "Student Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "studentName",
                                        value: formData.studentName,
                                        onChange: handleInputChange,
                                        placeholder: "Enter your Name",
                                        className: "w-full px-4 bg-white rounded-[10px] border-0 outline-none placeholder-gray-500 text-black  font-semibold text-[12px] leading-[100%] tracking-normal text-left font-[Poppins]",
                                        style: inputStyle,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-1 text-black ml-2",
                                        style: labelStyle,
                                        children: "Student ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "studentId",
                                        value: formData.studentId,
                                        onChange: handleInputChange,
                                        placeholder: "Enter your ID",
                                        className: "w-full px-4 bg-white rounded-[10px] border-0 outline-none placeholder-gray-500 text-black  font-semibold text-[12px] leading-[100%] tracking-normal text-left font-[Poppins]",
                                        style: inputStyle,
                                        disabled: editingStudent,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-1 text-black ml-2",
                                        style: labelStyle,
                                        children: "Contact Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        name: "contactNumber",
                                        value: formData.contactNumber,
                                        onChange: handleInputChange,
                                        placeholder: "Enter your Phone Number",
                                        className: "w-full px-4 bg-white rounded-[10px] border-0 outline-none placeholder-gray-500 text-black  font-semibold text-[12px] leading-[100%] tracking-normal text-left font-[Poppins]",
                                        style: inputStyle,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-1 text-black ml-2",
                                        style: labelStyle,
                                        children: "E-Mail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleInputChange,
                                        placeholder: "Enter E-Mail",
                                        className: "w-full px-4 bg-white rounded-[10px] border-0 outline-none placeholder-gray-500 text-black  font-semibold text-[12px] leading-[100%] tracking-normal text-left font-[Poppins]",
                                        style: inputStyle,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-1 text-black font-[500] text-[18px] leading-[22px] text-left ml-2",
                                        children: "Room/Bed Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        style: {
                                            width: "530px",
                                            height: "40px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "roomBed",
                                                value: formData.roomBed,
                                                onChange: handleInputChange,
                                                className: `w-full h-full px-4 bg-white rounded-[10px] border-0 outline-none cursor-pointer appearance-none
        text-[12px] leading-[22px] font-semibold font-[Poppins] 
        ${formData.roomBed === "" ? "text-[#0000008A]" : "text-black"}`,
                                                style: {
                                                    WebkitAppearance: "none",
                                                    MozAppearance: "none",
                                                    appearance: "none",
                                                    boxShadow: "0px 4px 10px 0px #00000040",
                                                    paddingLeft: "1rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        hidden: true,
                                                        children: "Select Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Room-A-101",
                                                        children: "Room-A-101"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Room-A-102",
                                                        children: "Room-A-102"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 360,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Room-A-103",
                                                        children: "Room-A-103"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Room-B-101",
                                                        children: "Room-B-101"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 362,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Room-B-102",
                                                        children: "Room-B-102"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 363,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Room-B-103",
                                                        children: "Room-B-103"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 364,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "pointer-events-none absolute right-10 top-1/2 transform -translate-y-1/2 w-7 h-6 text-black",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 text-black ml-2",
                                        style: labelStyle,
                                        children: "Emergency Contact Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        name: "emergencyContact",
                                        value: formData.emergencyContact,
                                        onChange: handleInputChange,
                                        placeholder: "Enter Contact Number",
                                        className: "w-full px-4 bg-white rounded-[10px] border-0 outline-none placeholder-gray-500 text-black  font-semibold text-[12px] leading-[100%] tracking-normal text-left font-[Poppins]",
                                        style: inputStyle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-1 text-black ml-2",
                                        style: labelStyle,
                                        children: "Admission Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-[300px] max-w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-[300px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: dateInputRef,
                                                            type: "date",
                                                            name: "admissionDate",
                                                            value: formData.admissionDate ? formData.admissionDate.split("-").reverse().join("-") : "",
                                                            onChange: (e)=>{
                                                                if (e.target.value) {
                                                                    const selectedDate = new Date(e.target.value);
                                                                    const formattedDate = `${selectedDate.getDate().toString().padStart(2, "0")}-${(selectedDate.getMonth() + 1).toString().padStart(2, "0")}-${selectedDate.getFullYear()}`;
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            admissionDate: formattedDate
                                                                        }));
                                                                } else {
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            admissionDate: ""
                                                                        }));
                                                                }
                                                            },
                                                            className: "absolute top-0 left-0 w-full h-full opacity-0 z-20 cursor-pointer",
                                                            style: {
                                                                colorScheme: "light"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                            lineNumber: 409,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-[10px]  px-4  h-[38px] flex items-center font-[Poppins] font-semibold text-[15px]  tracking-widest text-gray-800 select-none z-10 shadow-[0px_4px_10px_0px_#00000040]",
                                                            children: formData.admissionDate || ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        !formData.admissionDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 left-4 -translate-y-1/2 z-0 text-gray-500 font-[Poppins] font-semibold text-[15px] tracking-[0.3em] pointer-events-none select-none",
                                                            children: "d d - m m - y y y y"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                            lineNumber: 450,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleCalendarClick,
                                                className: "ml-3 p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center",
                                                title: "Open Calendar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "30",
                                                    height: "30",
                                                    viewBox: "0 0 30 30",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                            id: "mask0_370_4",
                                                            style: {
                                                                maskType: "alpha"
                                                            },
                                                            maskUnits: "userSpaceOnUse",
                                                            x: "0",
                                                            y: "0",
                                                            width: "30",
                                                            height: "30",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "30",
                                                                height: "30",
                                                                fill: "#D9D9D9"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                lineNumber: 483,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                            lineNumber: 474,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            mask: "url(#mask0_370_4)",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6.25 27.5C5.5625 27.5 4.97396 27.2552 4.48438 26.7656C3.99479 26.276 3.75 25.6875 3.75 25V7.5C3.75 6.8125 3.99479 6.22396 4.48438 5.73438C4.97396 5.24479 5.5625 5 6.25 5H7.5V2.5H10V5H20V2.5H22.5V5H23.75C24.4375 5 25.026 5.24479 25.5156 5.73438C26.0052 6.22396 26.25 6.8125 26.25 7.5V25C26.25 25.6875 26.0052 26.276 25.5156 26.7656C25.026 27.2552 24.4375 27.5 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25ZM6.25 10H23.75V7.5H6.25V10ZM15 17.5C14.6458 17.5 14.349 17.3802 14.1094 17.1406C13.8698 16.901 13.75 16.6042 13.75 16.25C13.75 15.8958 13.8698 15.599 14.1094 15.3594C14.349 15.1198 14.6458 15 15 15C15.3542 15 15.651 15.1198 15.8906 15.3594C16.1302 15.599 16.25 15.8958 16.25 16.25C16.25 16.6042 16.1302 16.901 15.8906 17.1406C15.651 17.3802 15.3542 17.5 15 17.5ZM10 17.5C9.64583 17.5 9.34896 17.3802 9.10938 17.1406C8.86979 16.901 8.75 16.6042 8.75 16.25C8.75 15.8958 8.86979 15.599 9.10938 15.3594C9.34896 15.1198 9.64583 15 10 15C10.3542 15 10.651 15.1198 10.8906 15.3594C11.1302 15.599 11.25 15.8958 11.25 16.25C11.25 16.6042 11.1302 16.901 10.8906 17.1406C10.651 17.3802 10.3542 17.5 10 17.5ZM20 17.5C19.6458 17.5 19.349 17.3802 19.1094 17.1406C18.8698 16.901 18.75 16.6042 18.75 16.25C18.75 15.8958 18.8698 15.599 19.1094 15.3594C19.349 15.1198 19.6458 15 20 15C20.3542 15 20.651 15.1198 20.8906 15.3594C21.1302 15.599 21.25 15.8958 21.25 16.25C21.25 16.6042 21.1302 16.901 20.8906 17.1406C20.651 17.3802 20.3542 17.5 20 17.5ZM15 22.5C14.6458 22.5 14.349 22.3802 14.1094 22.1406C13.8698 21.901 13.75 21.6042 13.75 21.25C13.75 20.8958 13.8698 20.599 14.1094 20.3594C14.349 20.1198 14.6458 20 15 20C15.3542 20 15.651 20.1198 15.8906 20.3594C16.1302 20.599 16.25 20.8958 16.25 21.25C16.25 21.6042 16.1302 21.901 15.8906 22.1406C15.651 22.3802 15.3542 22.5 15 22.5ZM10 22.5C9.64583 22.5 9.34896 22.3802 9.10938 22.1406C8.86979 21.901 8.75 21.6042 8.75 21.25C8.75 20.8958 8.86979 20.599 9.10938 20.3594C9.34896 20.1198 9.64583 20 10 20C10.3542 20 10.651 20.1198 10.8906 20.3594C11.1302 20.599 11.25 20.8958 11.25 21.25C11.25 21.6042 11.1302 21.901 10.8906 22.1406C10.651 22.3802 10.3542 22.5 10 22.5ZM20 22.5C19.6458 22.5 19.349 22.3802 19.1094 22.1406C18.8698 21.901 18.75 21.6042 18.75 21.25C18.75 20.8958 18.8698 20.599 19.1094 20.3594C19.349 20.1198 19.6458 20 20 20C20.3542 20 20.651 20.1198 20.8906 20.3594C21.1302 20.599 21.25 20.8958 21.25 21.25C21.25 21.6042 21.1302 21.901 20.8906 22.1406C20.651 22.3802 20.3542 22.5 20 22.5Z",
                                                                fill: "#1C1B1F"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                lineNumber: 486,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                            lineNumber: 485,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 467,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 text-black font-[500] text-[10px]  ml-2",
                                        style: labelStyle,
                                        children: "Emergency Contact Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "emergencyContactName",
                                        value: formData.emergencyContactName,
                                        onChange: handleInputChange,
                                        placeholder: "Enter Name",
                                        className: "w-full px-4 bg-white rounded-[10px] border-0 outline-none placeholder-gray-500 text-black  font-semibold text-[12px] leading-[100%] tracking-normal text-left font-[Poppins]",
                                        style: inputStyle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 text-black font-[500] text-[10px] ml-2",
                                        style: labelStyle,
                                        children: "Fee Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "feeStatus",
                                        value: formData.feeStatus,
                                        onChange: handleInputChange,
                                        placeholder: "Paid",
                                        className: "px-4 bg-white rounded-[10px] border-0 outline-none  text-black text-[12px] font-[Poppins] font-semibold  placeholder:font-[600] placeholder:font-[Poppins] placeholder-gray-500",
                                        style: {
                                            ...inputStyle,
                                            width: "300px",
                                            maxWidth: "100%",
                                            paddingLeft: "1rem"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/management/management.jsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/management/management.jsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: editingStudent ? handleUpdate : handleSubmit,
                                className: "mt-6 px-6 py-2 bg-white text-black rounded-[10px] shadow hover:bg-gray-200 transition-colors font-[Poppins]",
                                style: {
                                    fontWeight: "600",
                                    fontSize: "15px"
                                },
                                children: editingStudent ? "Update Student" : "Register Student"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            editingStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: resetForm,
                                className: "mt-6 px-6 py-2 bg-gray-400 text-white rounded-[10px] shadow font-medium hover:bg-gray-500 transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/management/management.jsx",
                                lineNumber: 558,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/management/management.jsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/management/management.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto mt-8 sm:mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 px-4 sm:px-0",
                    style: {
                        fontFamily: "Inter",
                        fontWeight: "700",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                        opacity: 1
                    },
                    children: "Student List & Fee status"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/management/management.jsx",
                    lineNumber: 571,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/management/management.jsx",
                lineNumber: 570,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#BEC5AD] rounded-[20px] p-4 sm:p-6 lg:p-8",
                    style: {
                        boxShadow: "0px 4px 4px 0px #00000040 inset"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-black rounded-[19.6px] overflow-hidden",
                            style: {
                                borderWidth: "0.98px",
                                width: "100%",
                                minWidth: "900px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-black flex text-center",
                                    children: [
                                        "Student ID",
                                        "Name",
                                        "Room/Bed",
                                        "Contact",
                                        "Fees Status",
                                        "Dues",
                                        "Action"
                                    ].map((header, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-0.5 py-2 relative flex-1",
                                            style: {
                                                fontFamily: "Poppins",
                                                fontWeight: "600",
                                                fontSize: "14px",
                                                lineHeight: "100%",
                                                letterSpacing: "0%",
                                                textAlign: "center"
                                            },
                                            children: [
                                                header,
                                                index < 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 top-1/2 transform -translate-y-1/2",
                                                    style: {
                                                        width: "0px",
                                                        height: "20px",
                                                        border: "0.981623px solid #000000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 626,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, header, true, {
                                            fileName: "[project]/src/app/components/management/management.jsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/management/management.jsx",
                                    lineNumber: 602,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#BEC5AD] text-center text-sm",
                                    children: students.map((student, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-black flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 flex-1",
                                                    children: student.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 643,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 flex-1",
                                                    children: student.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 644,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 flex-1",
                                                    children: student.room
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 645,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 text-xs flex-1",
                                                    children: student.contact
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 646,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        style: getFeeStatusStyle(student.feeStatus),
                                                        children: student.feeStatus
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 650,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 649,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 flex-1",
                                                    children: student.dues
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 657,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-0.5 py-1 flex items-center justify-center flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-4 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleView(student.id),
                                                                className: "text-gray-800 hover:text-black flex items-center justify-center transition-colors",
                                                                title: "View Student",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "27",
                                                                    height: "27",
                                                                    viewBox: "0 0 27 27",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                                            id: `mask0_221_256_${i}`,
                                                                            style: {
                                                                                maskType: "alpha"
                                                                            },
                                                                            maskUnits: "userSpaceOnUse",
                                                                            x: "0",
                                                                            y: "0",
                                                                            width: "27",
                                                                            height: "27",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                x: "0.554199",
                                                                                y: "0.6875",
                                                                                width: "25.7356",
                                                                                height: "25.7356",
                                                                                fill: "#D9D9D9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                                lineNumber: 682,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                                            lineNumber: 673,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                            mask: `url(#mask0_221_256_${i})`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M13.4215 17.8444C14.7619 17.8444 15.9012 17.3752 16.8395 16.437C17.7778 15.4987 18.2469 14.3594 18.2469 13.019C18.2469 11.6786 17.7778 10.5392 16.8395 9.60094C15.9012 8.66266 14.7619 8.19352 13.4215 8.19352C12.0811 8.19352 10.9417 8.66266 10.0035 9.60094C9.06519 10.5392 8.59605 11.6786 8.59605 13.019C8.59605 14.3594 9.06519 15.4987 10.0035 16.437C10.9417 17.3752 12.0811 17.8444 13.4215 17.8444ZM13.4215 15.9142C12.6172 15.9142 11.9336 15.6327 11.3707 15.0698C10.8077 14.5068 10.5262 13.8232 10.5262 13.019C10.5262 12.2147 10.8077 11.5311 11.3707 10.9681C11.9336 10.4052 12.6172 10.1237 13.4215 10.1237C14.2257 10.1237 14.9093 10.4052 15.4723 10.9681C16.0353 11.5311 16.3167 12.2147 16.3167 13.019C16.3167 13.8232 16.0353 14.5068 15.4723 15.0698C14.9093 15.6327 14.2257 15.9142 13.4215 15.9142ZM13.4215 21.0613C10.8122 21.0613 8.4352 20.3331 6.29056 18.8765C4.14593 17.4199 2.59106 15.4674 1.62598 13.019C2.59106 10.5705 4.14593 8.61798 6.29056 7.16141C8.4352 5.70485 10.8122 4.97656 13.4215 4.97656C16.0308 4.97656 18.4078 5.70485 20.5524 7.16141C22.697 8.61798 24.2519 10.5705 25.217 13.019C24.2519 15.4674 22.697 17.4199 20.5524 18.8765C18.4078 20.3331 16.0308 21.0613 13.4215 21.0613ZM13.4215 18.9167C15.441 18.9167 17.2952 18.385 18.9841 17.3216C20.673 16.2582 21.9643 14.824 22.8579 13.019C21.9643 11.2139 20.673 9.77966 18.9841 8.71627C17.2952 7.65289 15.441 7.1212 13.4215 7.1212C11.4019 7.1212 9.54773 7.65289 7.85883 8.71627C6.16993 9.77966 4.87868 11.2139 3.98508 13.019C4.87868 14.824 6.16993 16.2582 7.85883 17.3216C9.54773 18.385 11.4019 18.9167 13.4215 18.9167Z",
                                                                                fill: "#1C1B1F"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                                lineNumber: 691,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                                            lineNumber: 690,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                lineNumber: 661,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "1px",
                                                                    height: "20px",
                                                                    backgroundColor: "#000000",
                                                                    margin: "0 8px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                lineNumber: 699,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(student.id),
                                                                className: "text-gray-800 hover:text-black flex items-center justify-center transition-colors",
                                                                title: "Edit Student",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "27",
                                                                    height: "26",
                                                                    viewBox: "0 0 27 26",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                                            id: `mask0_221_285_${i}`,
                                                                            style: {
                                                                                maskType: "alpha"
                                                                            },
                                                                            maskUnits: "userSpaceOnUse",
                                                                            x: "0",
                                                                            y: "0",
                                                                            width: "27",
                                                                            height: "26",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                x: "0.678223",
                                                                                y: "0.0253906",
                                                                                width: "25.7356",
                                                                                height: "25.7356",
                                                                                fill: "#D9D9D9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                                lineNumber: 730,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                                            lineNumber: 721,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                            mask: `url(#mask0_221_285_${i})`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M2.82373 25.7609V21.4717H24.2701V25.7609H2.82373ZM7.113 17.1824H8.61425L16.9783 8.8451L15.4503 7.31705L7.113 15.6811V17.1824ZM4.96837 19.327V14.7697L16.9783 2.78651C17.1749 2.58991 17.4028 2.438 17.6619 2.33077C17.9211 2.22354 18.1936 2.16992 18.4796 2.16992C18.7655 2.16992 19.0425 2.22354 19.3106 2.33077C19.5787 2.438 19.82 2.59885 20.0344 2.81331L21.5089 4.31456C21.7233 4.51115 21.8797 4.74349 21.978 5.01157C22.0763 5.27965 22.1255 5.55666 22.1255 5.84261C22.1255 6.11069 22.0763 6.3743 21.978 6.63345C21.8797 6.89259 21.7233 7.1294 21.5089 7.34386L9.52572 19.327H4.96837Z",
                                                                                fill: "#1C1B1F"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                                lineNumber: 739,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/management/management.jsx",
                                                                            lineNumber: 738,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                                    lineNumber: 714,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/management/management.jsx",
                                                                lineNumber: 709,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/management/management.jsx",
                                                        lineNumber: 659,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/management/management.jsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, student.id, true, {
                                            fileName: "[project]/src/app/components/management/management.jsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/management/management.jsx",
                                    lineNumber: 640,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/management/management.jsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/management/management.jsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/management/management.jsx",
                    lineNumber: 588,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/management/management.jsx",
                lineNumber: 587,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/management/management.jsx",
        lineNumber: 227,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = StudentManagement;
}),
"[project]/src/app/components/newitem/newitem.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AddNewItem() {
    const dateInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
        height: "40px",
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white p-3 sm:p-4 md:p-6 lg:p-8",
        style: {
            backgroundColor: "#FFFFFF"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-2xl font-bold text-black flex items-center ml-4",
                    style: {
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontStyle: "normal",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1 h-8 sm:h-10 md:h-5 bg-red-500 mr-2 sm:mr-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Add new Item"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "#BEC5AD",
                        boxShadow: "0px 4px 20px 0px #00000040 inset",
                        borderRadius: "20px"
                    },
                    className: "jsx-27714ea6cdfe824c" + " " + "rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-27714ea6cdfe824c" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "itemName",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Item Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "itemName",
                                            type: "text",
                                            name: "itemName",
                                            value: formData.itemName,
                                            onChange: handleInputChange,
                                            style: inputStyle,
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "location",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "location",
                                            type: "text",
                                            name: "location",
                                            value: formData.location,
                                            onChange: handleInputChange,
                                            style: inputStyle,
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "barcodeId",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Barcode ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "barcodeId",
                                            type: "text",
                                            name: "barcodeId",
                                            value: formData.barcodeId,
                                            onChange: handleInputChange,
                                            style: inputStyle,
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-27714ea6cdfe824c" + " " + "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "status",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "status",
                                            name: "status",
                                            value: formData.status,
                                            onChange: handleInputChange,
                                            style: {
                                                fontFamily: "Poppins",
                                                fontWeight: 600,
                                                border: "none",
                                                height: "40px",
                                                paddingLeft: "20px",
                                                paddingRight: "16px",
                                                color: formData.status ? "#000000" : "#6B7280",
                                                width: "100%",
                                                borderRadius: "10px"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "appearance-none w-full px-12 py-3 rounded-xl text-gray-800 bg-white font-medium text-[12px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] outline-none leading-[1.1]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    style: {
                                                        color: "#9CA3AF"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Select Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "active",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "inactive",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Inactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "maintenance",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Maintenance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "disposed",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Disposed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            style: {
                                                top: "calc(60% + 12px)",
                                                transform: "translateY(-50%)"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-4 h-4 text-gray-600 absolute right-10 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7",
                                                className: "jsx-27714ea6cdfe824c"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-27714ea6cdfe824c" + " " + "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "category",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "category",
                                            name: "category",
                                            value: formData.category,
                                            onChange: handleInputChange,
                                            style: {
                                                fontFamily: "Poppins",
                                                fontWeight: 600,
                                                border: "none",
                                                height: "42px",
                                                paddingLeft: "20px",
                                                paddingRight: "16px",
                                                color: formData.status ? "#000000" : "#6B7280",
                                                width: "100%",
                                                borderRadius: "10px"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "appearance-none w-full px-12 py-3 rounded-xl text-gray-800 bg-white font-medium text-[12px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] outline-none leading-[1.1]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    style: {
                                                        color: "#9CA3AF"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Select Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "electronics",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Electronics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "furniture",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Furniture"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "office-supplies",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Office Supplies"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "equipment",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Equipment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "vehicles",
                                                    style: {
                                                        color: "#6B7280"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c",
                                                    children: "Vehicles"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            style: {
                                                top: "calc(60% + 12px)",
                                                transform: "translateY(-50%)"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-4 h-4 text-gray-600 absolute right-15 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7",
                                                className: "jsx-27714ea6cdfe824c"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-27714ea6cdfe824c" + " " + "mt-6 sm:mt-8 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "description",
                                    style: {
                                        fontFamily: "Poppins",
                                        lineHeight: "1.5"
                                    },
                                    className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                    children: "Description (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "description",
                                            name: "description",
                                            value: formData.description,
                                            onChange: handleInputChange,
                                            rows: 3,
                                            placeholder: "Enter description here...",
                                            style: {
                                                width: "100%",
                                                height: "90px",
                                                backgroundColor: "#FFFFFF",
                                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                                                borderRadius: "10px",
                                                color: "#000000",
                                                border: "none",
                                                padding: "12px 16px",
                                                fontSize: "14px",
                                                fontFamily: "Poppins",
                                                resize: "none"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                            children: `
      textarea::placeholder {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 12px;
        color: #6B7280;
      }
                 `
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-27714ea6cdfe824c" + " " + "mt-6 sm:mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        zIndex: 1000
                                    },
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full mb-4 sm:mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "purchaseDate",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Purchase Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-27714ea6cdfe824c" + " " + "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "purchaseDate",
                                                    ref: dateInputRef,
                                                    type: "text",
                                                    name: "purchaseDate",
                                                    value: formData.purchaseDate,
                                                    onChange: handleInputChange,
                                                    placeholder: "dd - mm - yyyy",
                                                    readOnly: true,
                                                    style: {
                                                        backgroundColor: "#FFFFFF",
                                                        fontFamily: "Poppins",
                                                        fontWeight: 500,
                                                        fontSize: "15px",
                                                        lineHeight: "100%",
                                                        letterSpacing: "0.7em",
                                                        textAlign: "center",
                                                        color: formData.purchaseDate ? "#000000" : "#6B7280",
                                                        width: "100%",
                                                        maxWidth: "290px",
                                                        height: "40px",
                                                        borderRadius: "10px",
                                                        position: "relative",
                                                        zIndex: 1001,
                                                        outline: "none",
                                                        boxShadow: "0px 4px 10px 0px #00000040",
                                                        cursor: "pointer"
                                                    },
                                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full max-w-[290px] h-[40px] px-3 py-2 border border-gray-300 text-center text-[15px] font-medium font-[Poppins] text-gray-800 bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500 placeholder:font-medium placeholder:font-[Poppins] cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    ref: dateInputRef,
                                                    style: {
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "0",
                                                        zIndex: 1002,
                                                        width: "290px",
                                                        height: "40px",
                                                        opacity: 0,
                                                        pointerEvents: "none"
                                                    },
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                purchaseDate: e.target.value
                                                            }));
                                                    },
                                                    className: "jsx-27714ea6cdfe824c"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                            }, 3);
                                                        }
                                                    },
                                                    className: "jsx-27714ea6cdfe824c" + " " + "flex-shrink-0 self-start sm:self-center cursor-pointer ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                            id: "mask0_219_909",
                                                            style: {
                                                                maskType: "alpha"
                                                            },
                                                            maskUnits: "userSpaceOnUse",
                                                            x: "0",
                                                            y: "0",
                                                            width: "30",
                                                            height: "30",
                                                            className: "jsx-27714ea6cdfe824c",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "30",
                                                                height: "30",
                                                                fill: "#D9D9D9",
                                                                className: "jsx-27714ea6cdfe824c"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                            lineNumber: 462,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            mask: "url(#mask0_219_909)",
                                                            className: "jsx-27714ea6cdfe824c",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6.25 27.5C5.5625 27.5 4.97396 27.2552 4.48438 26.7656C3.99479 26.276 3.75 25.6875 3.75 25V7.5C3.75 6.8125 3.99479 6.22396 4.48438 5.73438C4.97396 5.24479 5.5625 5 6.25 5H7.5V2.5H10V5H20V2.5H22.5V5H23.75C24.4375 5 25.026 5.24479 25.5156 5.73438C26.0052 6.22396 26.25 6.8125 26.25 7.5V25C26.25 25.6875 26.0052 26.276 25.5156 26.7656C25.026 27.2552 24.4375 27.5 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25ZM6.25 10H23.75V7.5H6.25V10ZM15 17.5C14.6458 17.5 14.349 17.3802 14.1094 17.1406C13.8698 16.901 13.75 16.6042 13.75 16.25C13.75 15.8958 13.8698 15.599 14.1094 15.3594C14.349 15.1198 14.6458 15 15 15C15.3542 15 15.651 15.1198 15.8906 15.3594C16.1302 15.599 16.25 15.8958 16.25 16.25C16.25 16.6042 16.1302 16.901 15.8906 17.1406C15.651 17.3802 15.3542 17.5 15 17.5ZM10 17.5C9.64583 17.5 9.34896 17.3802 9.10938 17.1406C8.86979 16.901 8.75 16.6042 8.75 16.25C8.75 15.8958 8.86979 15.599 9.10938 15.3594C9.34896 15.1198 9.64583 15 10 15C10.3542 15 10.651 15.1198 10.8906 15.3594C11.1302 15.599 11.25 15.8958 11.25 16.25C11.25 16.6042 11.1302 16.901 10.8906 17.1406C10.651 17.3802 10.3542 17.5 10 17.5ZM20 17.5C19.6458 17.5 19.349 17.3802 19.1094 17.1406C18.8698 16.901 18.75 16.6042 18.75 16.25C18.75 15.8958 18.8698 15.599 19.1094 15.3594C19.349 15.1198 19.6458 15 20 15C20.3542 15 20.651 15.1198 20.8906 15.3594C21.1302 15.599 21.25 15.8958 21.25 16.25C21.25 16.6042 21.1302 16.901 20.8906 17.1406C20.651 17.3802 20.3542 17.5 20 17.5ZM15 22.5C14.6458 22.5 14.349 22.3802 14.1094 22.1406C13.8698 21.901 13.75 21.6042 13.75 21.25C13.75 20.8958 13.8698 20.599 14.1094 20.3594C14.349 20.1198 14.6458 20 15 20C15.3542 20 15.651 20.1198 15.8906 20.3594C16.1302 20.599 16.25 20.8958 16.25 21.25C16.25 21.6042 16.1302 16.901 15.8906 22.1406C15.651 22.3802 15.3542 22.5 15 22.5ZM10 22.5C9.64583 22.5 9.34896 22.3802 9.10938 22.1406C8.86979 21.901 8.75 21.6042 8.75 21.25C8.75 20.8958 8.86979 20.599 9.10938 20.3594C9.34896 20.1198 9.64583 20 10 20C10.3542 20 10.651 20.1198 10.8906 20.3594C11.1302 20.599 11.25 20.8958 11.25 21.25C11.25 21.6042 11.1302 21.901 10.8906 22.1406C10.651 22.3802 10.3542 22.5 10 22.5ZM20 22.5C19.6458 22.5 19.349 22.3802 19.1094 22.1406C18.8698 21.901 18.75 21.6042 18.75 21.25C18.75 20.8958 18.8698 20.599 19.1094 20.3594C19.349 20.1198 19.6458 20 20 20C20.3542 20 20.651 20.1198 20.8906 20.3594C21.1302 20.599 21.25 20.8958 21.25 21.25C21.25 21.6042 21.1302 21.901 20.8906 22.1406C20.651 22.3802 20.3542 22.5 20 22.5Z",
                                                                fill: "#1C1B1F",
                                                                className: "jsx-27714ea6cdfe824c"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                                lineNumber: 474,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                            lineNumber: 473,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "purchaseCost",
                                            style: {
                                                fontFamily: "Poppins",
                                                lineHeight: "1.5"
                                            },
                                            className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                            children: "Purchase Cost (INR)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            className: "jsx-27714ea6cdfe824c" + " " + "w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                            lineNumber: 495,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-27714ea6cdfe824c" + " " + "mt-6 sm:mt-8 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "receipt",
                                    style: {
                                        fontFamily: "Poppins",
                                        lineHeight: "1.5"
                                    },
                                    className: "jsx-27714ea6cdfe824c" + " " + "block font-medium text-black mb-2 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] ml-4",
                                    children: "Upload Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full sm:w-auto py-2 px-3 border focus:outline-none text-black file:mr-3 file:py-1 file:px-3 file:rounded file:border file:text-sm file:font-medium file:bg-white file:text-black hover:file:bg-gray-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 531,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-27714ea6cdfe824c" + " " + "flex flex-col sm:flex-row flex-wrap gap-3 mt-8 sm:mt-10 sm:justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 text-black bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full sm:w-auto px-4 sm:px-6 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors",
                                    children: "Generate QR Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    className: "jsx-27714ea6cdfe824c" + " " + "w-full sm:w-auto px-4 sm:px-6 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors",
                                    children: "Save Item"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/newitem/newitem.jsx",
                            lineNumber: 559,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            id: "27714ea6cdfe824c",
                            children: "*{outline:none!important}html,body{margin:0;padding:0;background-color:#fff!important}input:focus,select:focus,textarea:focus,button:focus{box-shadow:none!important;outline:none!important}input[type=text]:focus,input[type=number]:focus,input[type=date]:focus,select:focus,textarea:focus{border:2px solid #6b7280!important;outline:none!important}input[type=file]:focus{border:2px solid #877575!important;outline:none!important}input[type=date]::-webkit-calendar-picker-indicator{-webkit-appearance:none;display:none}input[type=date]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=date]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=text],input[type=number],textarea{caret-color:#000!important;font-size:14px!important;font-weight:400!important;line-height:normal!important}input[type=text]#location,input[type=text]#itemName,input[type=text]#barcodeId{letter-spacing:normal!important;font-family:Poppins,sans-serif!important;font-size:14px!important;font-weight:400!important;line-height:1.2!important}input[type=text],input[type=number],textarea{text-size-adjust:100%!important}@media (width<=640px){.grid{gap:1rem!important}}@media (width<=480px){input,select,textarea{font-size:16px!important}}"
                        }, void 0, false, void 0, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/newitem/newitem.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/newitem/newitem.jsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/newitem/newitem.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AddNewItem;
}),

};

//# sourceMappingURL=src_app_components_8751ca43._.js.map