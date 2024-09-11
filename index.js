"use strict";
/*
This file was generated thanks to

https://js2ts.com/

For the amazing website interface for easy Typescript conversion of CommonJS code!

Suprisingly this one didnt have any errors on the typescript conversion did it all in one go so Full credit goes to them!

Which I did send my godbox code which contained it to the model earlier which may have helped this but merrr...

Author: Johnathan Edward Brown Of The Original CommonJS script Code Which Is refered to as the PandorasWallSource
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PandorasWallSource_instances, _a, _PandorasWallSource_middleBox, _PandorasWallSource_privateBox, _PandorasWallSource_publicBox, _PandorasWallSource_scope, _PandorasWallSource_masterBox, _PandorasWallSource_middle, _PandorasWallSource_privateFunction;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PandorasWallSource = void 0;
const crypto = require('node:crypto');
function generateHash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}
class PandorasWallSource {
    constructor(scope) {
        _PandorasWallSource_instances.add(this);
        _PandorasWallSource_middleBox.set(this, void 0);
        _PandorasWallSource_privateBox.set(this, void 0);
        _PandorasWallSource_publicBox.set(this, void 0);
        _PandorasWallSource_scope.set(this, void 0);
        _PandorasWallSource_masterBox.set(this, void 0);
        __classPrivateFieldSet(this, _PandorasWallSource_scope, scope, "f");
        __classPrivateFieldSet(this, _PandorasWallSource_privateBox, __classPrivateFieldGet(this, _PandorasWallSource_instances, "m", _PandorasWallSource_privateFunction).call(this, this), "f");
        __classPrivateFieldSet(this, _PandorasWallSource_middleBox, __classPrivateFieldGet(this, _PandorasWallSource_instances, "m", _PandorasWallSource_middle).call(this, __classPrivateFieldGet(this, _PandorasWallSource_privateBox, "f")), "f");
        __classPrivateFieldSet(this, _PandorasWallSource_publicBox, this.publicFunction(__classPrivateFieldGet(this, _PandorasWallSource_middleBox, "f")), "f");
    }
    publicFunction(middle) {
        class ThePublicBox {
            constructor(pandoraWall) {
                function exampleCode() {
                    function outerFunction() {
                        function innerFunction() {
                            console.log('Inner function');
                        }
                        const innerAnonymous = function () {
                            console.log('Anonymous function');
                        };
                        innerFunction();
                        innerAnonymous();
                    }
                    outerFunction();
                }
                exampleCode();
            }
        }
        return new ThePublicBox(middle);
    }
    setExpressApp(app) {
        return __classPrivateFieldGet(this, _PandorasWallSource_middleBox, "f").setExpress(app, __classPrivateFieldGet(this, _PandorasWallSource_middleBox, "f"));
    }
    getExpressSymbol() {
        return __classPrivateFieldGet(this, _PandorasWallSource_middleBox, "f").getGlobalSymbol();
    }
}
exports.PandorasWallSource = PandorasWallSource;
_a = PandorasWallSource, _PandorasWallSource_middleBox = new WeakMap(), _PandorasWallSource_privateBox = new WeakMap(), _PandorasWallSource_publicBox = new WeakMap(), _PandorasWallSource_scope = new WeakMap(), _PandorasWallSource_masterBox = new WeakMap(), _PandorasWallSource_instances = new WeakSet(), _PandorasWallSource_middle = function _PandorasWallSource_middle(a) {
    var _pandoraGlobal_instances, _pandoraGlobal_expressSymbol, _pandoraGlobal_expressLock, _pandoraGlobal_expressApp, _pandoraGlobal_Protect, _pandoraGlobal_expressProtect;
    class pandoraGlobal {
        constructor(a) {
            _pandoraGlobal_instances.add(this);
            _pandoraGlobal_expressSymbol.set(this, void 0);
            _pandoraGlobal_expressLock.set(this, void 0);
            _pandoraGlobal_expressApp.set(this, void 0);
            _pandoraGlobal_Protect.set(this, void 0);
            const crypto = require('node:crypto');
            this.GLOBAL_STRING = crypto.randomBytes(2048).toString('base64') + crypto.randomBytes(4096).toString('hex') + crypto.randomBytes(2048).toString('base64');
            __classPrivateFieldSet(this, _pandoraGlobal_expressSymbol, Symbol(this.GLOBAL_STRING), "f");
            __classPrivateFieldSet(this, _pandoraGlobal_expressLock, 0, "f");
            __classPrivateFieldSet(this, _pandoraGlobal_Protect, a, "f");
        }
        getGlobalString() {
            return this.GLOBAL_STRING;
        }
        getGlobalSymbol() {
            return __classPrivateFieldGet(this, _pandoraGlobal_expressSymbol, "f");
        }
        setExpress(app, box) {
            function isExpressApp(obj, box) {
                const isExpressAppSymbol = box.getGlobalSymbol();
                return obj && obj[isExpressAppSymbol] === true;
            }
            console.log('Set express app called!');
            if (__classPrivateFieldGet(this, _pandoraGlobal_expressLock, "f") === 0 && isExpressApp(app, box)) {
                __classPrivateFieldSet(this, _pandoraGlobal_expressApp, app, "f");
                __classPrivateFieldSet(this, _pandoraGlobal_expressLock, 1, "f");
                __classPrivateFieldGet(this, _pandoraGlobal_instances, "m", _pandoraGlobal_expressProtect).call(this, app, box);
                return true;
            }
            else {
                console.log('Malicious Activity Detected on the setExpressApp Call Please Double Check your Servers Code!');
                return false;
            }
        }
        getVerify() {
            if (__classPrivateFieldGet(this, _pandoraGlobal_Protect, "f").verified === 2 || __classPrivateFieldGet(this, _pandoraGlobal_Protect, "f").verified2 === 2) {
                return 2;
            }
            if (__classPrivateFieldGet(this, _pandoraGlobal_Protect, "f").verified === 1 || __classPrivateFieldGet(this, _pandoraGlobal_Protect, "f").verified2 === 1) {
                return 1;
            }
            if (__classPrivateFieldGet(this, _pandoraGlobal_Protect, "f").verified === 0 || __classPrivateFieldGet(this, _pandoraGlobal_Protect, "f").verified2 === 0) {
                return 0;
            }
            return 0;
        }
    }
    _pandoraGlobal_expressSymbol = new WeakMap(), _pandoraGlobal_expressLock = new WeakMap(), _pandoraGlobal_expressApp = new WeakMap(), _pandoraGlobal_Protect = new WeakMap(), _pandoraGlobal_instances = new WeakSet(), _pandoraGlobal_expressProtect = function _pandoraGlobal_expressProtect(app, JBGlobal) {
        function isExpressApp(obj, JBGlobal) {
            const isExpressAppSymbol = JBGlobal.getGlobalSymbol();
            return obj && obj[isExpressAppSymbol] === true;
        }
        if (isExpressApp(app, JBGlobal)) {
            console.log('Pandoras Wall: Success its a express application!');
        }
        else {
            console.log('Malicious Activity detected trying to set the express app in context to overwrite handlers!');
            return;
        }
        console.log('Success!!!');
        app.use((req, res, next) => {
            switch (JBGlobal.getVerify()) {
                case 0:
                    res.status(200).send(JSON.stringify({
                        Error: 'Error please try again in like 1 second for the server to be refreshed!',
                        Warning: 'Dont worry our Merkle Verification System is currently loading up requests are not allowed until verification!, You Are secure with us!'
                    }));
                    break;
                case 1:
                    next();
                    break;
                case 2:
                    res.status(404).send(JSON.stringify({
                        Error: 'Error please try again in like 1 second for the server to be refreshed!',
                        Warning: 'Dont worry our Merkle Verification System has prevented some malicious Activity on our network, You Are secure with us!',
                        Message: 'Our Merkle Verification System Deletes Malicous Modified Server Files and Replaces With Original Starts Back Up, So You can Be in peace of mind of your web application security.',
                        Hackers: "Nice Try......"
                    }));
                default:
                    res.status(404).send(JSON.stringify({
                        Error: 'Error please try again in like 1 second for the server to be refreshed!',
                        Warning: 'Dont worry our Merkle Verification System has prevented some malicious Activity on our network, You Are secure with us!',
                        Message: 'Our Merkle Verification System Deletes Malicous Modified Server Files and Replaces With Original Starts Back Up, So You can Be in peace of mind of your web application security.',
                        Hackers: "Nice Try......"
                    }));
                    break;
            }
        });
    };
    return new pandoraGlobal(a);
}, _PandorasWallSource_privateFunction = function _PandorasWallSource_privateFunction(box) {
    var _ThePrivateBox_instances, _ThePrivateBox_rootMemoryHash, _ThePrivateBox_secondaryMemoryHash, _ThePrivateBox_currentMemoryHash, _ThePrivateBox_booleanLock, _ThePrivateBox_booleanASTLock, _ThePrivateBox_rootASTHash, _ThePrivateBox_currentASTHash, _ThePrivateBox_ASTInterval, _ThePrivateBox_MemoryInterval, _ThePrivateBox_exampleReverseTraverse, _ThePrivateBox_privateFunctionG;
    class ThePrivateBox {
        constructor(scope, box) {
            _ThePrivateBox_instances.add(this);
            _ThePrivateBox_rootMemoryHash.set(this, void 0);
            _ThePrivateBox_secondaryMemoryHash.set(this, void 0);
            _ThePrivateBox_currentMemoryHash.set(this, void 0);
            _ThePrivateBox_booleanLock.set(this, void 0);
            _ThePrivateBox_booleanASTLock.set(this, void 0);
            _ThePrivateBox_rootASTHash.set(this, void 0);
            _ThePrivateBox_currentASTHash.set(this, void 0);
            _ThePrivateBox_ASTInterval.set(this, void 0);
            _ThePrivateBox_MemoryInterval.set(this, void 0);
            this.scope = scope;
            this.verified = 0;
            this.verified2 = 0;
            __classPrivateFieldSet(this, _ThePrivateBox_booleanLock, { lock: true }, "f");
            __classPrivateFieldGet(this, _ThePrivateBox_instances, "m", _ThePrivateBox_privateFunctionG).call(this, scope, this);
            __classPrivateFieldSet(this, _ThePrivateBox_rootASTHash, __classPrivateFieldGet(this, _ThePrivateBox_instances, "m", _ThePrivateBox_exampleReverseTraverse).call(this, box), "f");
            __classPrivateFieldSet(this, _ThePrivateBox_ASTInterval, setInterval(() => {
                __classPrivateFieldSet(this, _ThePrivateBox_currentASTHash, __classPrivateFieldGet(this, _ThePrivateBox_instances, "m", _ThePrivateBox_exampleReverseTraverse).call(this, box), "f");
                if (__classPrivateFieldGet(this, _ThePrivateBox_rootASTHash, "f") === __classPrivateFieldGet(this, _ThePrivateBox_currentASTHash, "f")) {
                    console.log('NO changes detected in AST!');
                    this.verified2 = 1;
                }
                else {
                    console.log('WARNING WARNING WARNING YOU HAVE BEEN WARNED YOUR AST HAS DETECTED MODIFICATIONS TO THE RUNETIMES CODE!');
                    console.log('LOCKING AST!');
                    this.verified2 = 2;
                }
            }, 1000), "f");
            process.on('exit', () => {
                console.log('Child Exiting From pandorasWall');
                clearInterval(__classPrivateFieldGet(this, _ThePrivateBox_ASTInterval, "f"));
                clearInterval(__classPrivateFieldGet(this, _ThePrivateBox_MemoryInterval, "f"));
            });
        }
    }
    _ThePrivateBox_rootMemoryHash = new WeakMap(), _ThePrivateBox_secondaryMemoryHash = new WeakMap(), _ThePrivateBox_currentMemoryHash = new WeakMap(), _ThePrivateBox_booleanLock = new WeakMap(), _ThePrivateBox_booleanASTLock = new WeakMap(), _ThePrivateBox_rootASTHash = new WeakMap(), _ThePrivateBox_currentASTHash = new WeakMap(), _ThePrivateBox_ASTInterval = new WeakMap(), _ThePrivateBox_MemoryInterval = new WeakMap(), _ThePrivateBox_instances = new WeakSet(), _ThePrivateBox_exampleReverseTraverse = function _ThePrivateBox_exampleReverseTraverse(box) {
        function generateHash(input) {
            return crypto.createHash('sha256').update(input).digest('hex');
        }
        function reverseTraverseAndCapture(nodePath, localItems) {
            let currentPath = nodePath;
            while (currentPath && currentPath.node) {
                const node = currentPath.node;
                if (node.type === 'FunctionDeclaration') {
                    localItems.add({
                        type: 'FunctionDeclaration',
                        name: node.id ? node.id.name : '<anonymous>',
                        hash: generateHash(JSON.stringify(node)),
                        node: currentPath,
                    });
                }
                else if (node.type === 'FunctionExpression') {
                    localItems.add({
                        type: 'FunctionExpression',
                        name: node.id ? node.id.name : '<anonymous>',
                        hash: generateHash(JSON.stringify(node)),
                        node: currentPath,
                    });
                }
                else if (node.type === 'ArrowFunctionExpression') {
                    localItems.add({
                        type: 'ArrowFunctionExpression',
                        name: '<anonymous>',
                        hash: generateHash(JSON.stringify(node)),
                        node: currentPath,
                    });
                }
                else if (node.type === 'VariableDeclaration') {
                    node.declarations.forEach((declaration) => {
                        if (declaration.id && declaration.id.name) {
                            localItems.add({
                                type: 'VariableDeclaration',
                                name: declaration.id.name,
                                hash: generateHash(JSON.stringify(declaration)),
                                node: currentPath,
                            });
                        }
                    });
                }
                currentPath = currentPath.parentPath;
            }
        }
        const babelParser = require('@babel/parser');
        const recast = require('recast');
        const codeString = _a.toString();
        const ast = babelParser.parse(codeString, {
            sourceType: 'module',
            plugins: ['classPrivateMethods', 'classPrivateProperties'],
        });
        const reverseLocalItems = new Set();
        recast.types.visit(ast, {
            visitFunctionDeclaration(path) {
                reverseTraverseAndCapture(path, reverseLocalItems);
                return false;
            },
            visitFunctionExpression(path) {
                reverseTraverseAndCapture(path, reverseLocalItems);
                return false;
            },
            visitArrowFunctionExpression(path) {
                reverseTraverseAndCapture(path, reverseLocalItems);
                return false;
            },
            visitVariableDeclaration(path) {
                path.node.declarations.forEach((declaration) => {
                    reverseTraverseAndCapture(path, reverseLocalItems);
                });
                return false;
            }
        });
        const combinedHash = generateHash(Array.from(reverseLocalItems).toString());
        return combinedHash;
    }, _ThePrivateBox_privateFunctionG = function _ThePrivateBox_privateFunctionG(scope, box) {
        const crypto = require('crypto');
        function generateHash(input) {
            return crypto.createHash('sha256').update(input).digest('hex');
        }
        function captureMemoryState() {
            function hashObject(obj, visited = new Set(), depth = 0, maxDepth = 100000000) {
                if (obj === null || obj === undefined)
                    return generateHash('null');
                const type = typeof obj;
                if (type === 'string' || type === 'number' || type === 'boolean') {
                    return generateHash(obj.toString());
                }
                if (type === 'function') {
                    return generateHash(obj.toString());
                }
                if (visited.has(obj)) {
                    return generateHash('circular');
                }
                visited.add(obj);
                if (depth > maxDepth) {
                    return generateHash('depth-exceeded');
                }
                if (Array.isArray(obj)) {
                    return generateHash(obj.toString());
                }
                if (type === 'object') {
                    return generateHash(obj.toString());
                }
                return generateHash('unknown');
            }
            const list = [hashObject(process), hashObject(global), hashObject(require)];
            const finalHashes = hashObject(list);
            return finalHashes;
        }
        function startMonitoring(box) {
            __classPrivateFieldSet(box, _ThePrivateBox_rootMemoryHash, captureMemoryState(), "f");
            __classPrivateFieldSet(box, _ThePrivateBox_MemoryInterval, setInterval(() => {
                __classPrivateFieldSet(box, _ThePrivateBox_currentMemoryHash, captureMemoryState(), "f");
                if (__classPrivateFieldGet(box, _ThePrivateBox_rootMemoryHash, "f") === __classPrivateFieldGet(box, _ThePrivateBox_currentMemoryHash, "f") && __classPrivateFieldGet(box, _ThePrivateBox_booleanLock, "f").lock) {
                    console.log('No Change Detected in Process Memory From Original Root Hash!');
                    box.verified = 1;
                }
                if (__classPrivateFieldGet(box, _ThePrivateBox_rootMemoryHash, "f") !== __classPrivateFieldGet(box, _ThePrivateBox_currentMemoryHash, "f") && __classPrivateFieldGet(box, _ThePrivateBox_booleanLock, "f").lock) {
                    __classPrivateFieldSet(box, _ThePrivateBox_secondaryMemoryHash, __classPrivateFieldGet(box, _ThePrivateBox_currentMemoryHash, "f"), "f");
                    __classPrivateFieldGet(box, _ThePrivateBox_booleanLock, "f").lock = false;
                    box.verified = 2;
                    console.log('Locking! Process has noticed a change in runtime Please be weary of this! if you didnt intentionally do this please pay CLOSE ATTENTION TO THIS CONSOLE LOG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                }
                else if (__classPrivateFieldGet(box, _ThePrivateBox_secondaryMemoryHash, "f") !== __classPrivateFieldGet(box, _ThePrivateBox_currentMemoryHash, "f") && !__classPrivateFieldGet(box, _ThePrivateBox_booleanLock, "f").lock) {
                    box.verified = 2;
                    console.log('Changes Detected in Process Memory! From Backup Secondary Hash WARNING THIS IS NOT GOOD! You have been warned! This process has been tampered with no doubt about it!');
                }
                else if (__classPrivateFieldGet(box, _ThePrivateBox_secondaryMemoryHash, "f") === __classPrivateFieldGet(box, _ThePrivateBox_currentMemoryHash, "f") && !__classPrivateFieldGet(box, _ThePrivateBox_booleanLock, "f").lock) {
                    box.verified = 2;
                    console.log('No Changes Detected in Process Memory! From Backup Secondary Hash WARNING THIS IS NOT GOOD! You have been warned! This Process may have been tampered with!');
                }
            }, 1000), "f");
        }
        process.on('uncaughtException', (err) => {
            console.error('Unhandled Exception:', err);
        });
        process.on('unhandledRejection', (reason, promise) => {
            console.error('Unhandled Rejection at:', promise, 'reason:', reason);
        });
        startMonitoring(box);
    };
    return new ThePrivateBox(__classPrivateFieldGet(this, _PandorasWallSource_scope, "f"), box);
};
module.exports = { PandorasWallSource };
