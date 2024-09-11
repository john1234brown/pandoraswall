/* 
This file was generated thanks to 

https://js2ts.com/

For the amazing website interface for easy Typescript conversion of CommonJS code!

Suprisingly this one didnt have any errors on the typescript conversion did it all in one go so Full credit goes to them!

Which I did send my godbox code which contained it to the model earlier which may have helped this but merrr...

Author: Johnathan Edward Brown Of The Original CommonJS script Code Which Is refered to as the PandorasWallSource
*/

const crypto = require('node:crypto');

function generateHash(input: string): string {
    return crypto.createHash('sha256').update(input).digest('hex');
}

class PandorasWallSource {
    #middleBox: any;
    #privateBox: any;
    #publicBox: any;
    #scope: any;
    #masterBox: any;

    constructor(scope: any) {
        this.#scope = scope;
        this.#privateBox = this.#privateFunction(this);
        this.#middleBox = this.#middle(this.#privateBox);
        this.#publicBox = this.publicFunction(this.#middleBox);
    }

    publicFunction(middle: any): any {
        class ThePublicBox {
            constructor(pandoraWall: any) {
                function exampleCode(): void {
                    function outerFunction(): void {
                        function innerFunction(): void {
                            console.log('Inner function');
                        }
                        const innerAnonymous = function (): void {
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

    setExpressApp(app: any){
        return this.#middleBox.setExpress(app, this.#middleBox);
    }

    getExpressSymbol(){
        return this.#middleBox.getGlobalSymbol();
    }

    #middle(a: any): any {
        class pandoraGlobal {
            GLOBAL_STRING: string;
            #expressSymbol: Symbol;
            #expressLock: number;
            #expressApp: any;
            #Protect: any;

            constructor(a: any) {
                const crypto = require('node:crypto');
                this.GLOBAL_STRING = crypto.randomBytes(2048).toString('base64') + crypto.randomBytes(4096).toString('hex') + crypto.randomBytes(2048).toString('base64');
                this.#expressSymbol = Symbol(this.GLOBAL_STRING);
                this.#expressLock = 0;
                this.#Protect = a;
            }

            getGlobalString(): string {
                return this.GLOBAL_STRING;
            }

            getGlobalSymbol(): Symbol {
                return this.#expressSymbol;
            }

            setExpress(app: any, box: any): boolean {
                function isExpressApp(obj: any, box: any): boolean {
                    const isExpressAppSymbol = box.getGlobalSymbol();
                    return obj && obj[isExpressAppSymbol] === true;
                }
                console.log('Set express app called!');
                if (this.#expressLock === 0 && isExpressApp(app, box)) {
                    this.#expressApp = app;
                    this.#expressLock = 1;
                    this.#expressProtect(app, box);
                    return true;
                } else {
                    console.log('Malicious Activity Detected on the setExpressApp Call Please Double Check your Servers Code!');
                    return false;
                }
            }

            #expressProtect(app: any, JBGlobal: any): void {
                function isExpressApp(obj: any, JBGlobal: any): boolean {
                    const isExpressAppSymbol = JBGlobal.getGlobalSymbol();
                    return obj && obj[isExpressAppSymbol] === true;
                }

                if (isExpressApp(app, JBGlobal)) {
                    console.log('Pandoras Wall: Success its a express application!');
                } else {
                    console.log('Malicious Activity detected trying to set the express app in context to overwrite handlers!');
                    return;
                }
                console.log('Success!!!');
                app.use((req: any, res: any, next: any) => {
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
            }

            getVerify(): number {
                if (this.#Protect.verified === 2 || this.#Protect.verified2 === 2) {
                    return 2;
                }
                if (this.#Protect.verified === 1 || this.#Protect.verified2 === 1) {
                    return 1;
                }
                if (this.#Protect.verified === 0 || this.#Protect.verified2 === 0) {
                    return 0;
                }
                return 0;
            }
        }

        return new pandoraGlobal(a);
    }

    #privateFunction(box: any): any {
        class ThePrivateBox {
            #rootMemoryHash: string | undefined;
            #secondaryMemoryHash: string | undefined;
            #currentMemoryHash: string | undefined;
            #booleanLock: { lock: boolean };
            #booleanASTLock: any;
            #rootASTHash: string;
            #currentASTHash: string | undefined;
            #ASTInterval: NodeJS.Timeout;
            #MemoryInterval: NodeJS.Timeout | undefined;
            verified: number;
            verified2: number;
            scope: any;

            constructor(scope: any, box: any) {
                this.scope = scope;
                this.verified = 0;
                this.verified2 = 0;
                this.#booleanLock = { lock: true };
                this.#privateFunctionG(scope, this);
                this.#rootASTHash = this.#exampleReverseTraverse(box);
                this.#ASTInterval = setInterval(() => {
                    this.#currentASTHash = this.#exampleReverseTraverse(box);
                    if (this.#rootASTHash === this.#currentASTHash) {
                        console.log('NO changes detected in AST!');
                        this.verified2 = 1;
                    } else {
                        console.log('WARNING WARNING WARNING YOU HAVE BEEN WARNED YOUR AST HAS DETECTED MODIFICATIONS TO THE RUNETIMES CODE!');
                        console.log('LOCKING AST!');
                        this.verified2 = 2;
                    }
                }, 1000);

                process.on('exit', () => {
                    console.log('Child Exiting From pandorasWall');
                    clearInterval(this.#ASTInterval);
                    clearInterval(this.#MemoryInterval);
                });
            }

            #exampleReverseTraverse(box: any): string {

                function generateHash(input: string): string {
                    return crypto.createHash('sha256').update(input).digest('hex');
                }

                function reverseTraverseAndCapture(nodePath: any, localItems: Set<any>): void {
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
                        } else if (node.type === 'FunctionExpression') {
                            localItems.add({
                                type: 'FunctionExpression',
                                name: node.id ? node.id.name : '<anonymous>',
                                hash: generateHash(JSON.stringify(node)),
                                node: currentPath,
                            });
                        } else if (node.type === 'ArrowFunctionExpression') {
                            localItems.add({
                                type: 'ArrowFunctionExpression',
                                name: '<anonymous>',
                                hash: generateHash(JSON.stringify(node)),
                                node: currentPath,
                            });
                        } else if (node.type === 'VariableDeclaration') {
                            node.declarations.forEach((declaration: any) => {
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
                const codeString = PandorasWallSource.toString();

                const ast = babelParser.parse(codeString, {
                    sourceType: 'module',
                    plugins: ['classPrivateMethods', 'classPrivateProperties'],
                });
                const reverseLocalItems = new Set();

                recast.types.visit(ast, {
                    visitFunctionDeclaration(path: any) {
                        reverseTraverseAndCapture(path, reverseLocalItems);
                        return false;
                    },

                    visitFunctionExpression(path: any) {
                        reverseTraverseAndCapture(path, reverseLocalItems);
                        return false;
                    },

                    visitArrowFunctionExpression(path: any) {
                        reverseTraverseAndCapture(path, reverseLocalItems);
                        return false;
                    },

                    visitVariableDeclaration(path: any) {
                        path.node.declarations.forEach((declaration: any) => {
                            reverseTraverseAndCapture(path, reverseLocalItems);
                        });
                        return false;
                    }
                });
                const combinedHash = generateHash(Array.from(reverseLocalItems).toString());
                return combinedHash;
            }

            #privateFunctionG(scope: any, box: any): void {
                const crypto = require('crypto');

                function generateHash(input: string): string {
                    return crypto.createHash('sha256').update(input).digest('hex');
                }

                function captureMemoryState(): string {
                    function hashObject(obj: any, visited = new Set(), depth = 0, maxDepth = 100000000): string {
                        if (obj === null || obj === undefined) return generateHash('null');

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

                function startMonitoring(box: any): void {
                    box.#rootMemoryHash = captureMemoryState();
                    box.#MemoryInterval = setInterval(() => {
                        box.#currentMemoryHash = captureMemoryState();
                        if (box.#rootMemoryHash === box.#currentMemoryHash && box.#booleanLock.lock) {
                            console.log('No Change Detected in Process Memory From Original Root Hash!');
                            box.verified = 1;
                        }

                        if (box.#rootMemoryHash !== box.#currentMemoryHash && box.#booleanLock.lock) {
                            box.#secondaryMemoryHash = box.#currentMemoryHash;
                            box.#booleanLock.lock = false;
                            box.verified = 2;
                            console.log('Locking! Process has noticed a change in runtime Please be weary of this! if you didnt intentionally do this please pay CLOSE ATTENTION TO THIS CONSOLE LOG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                        } else if (box.#secondaryMemoryHash !== box.#currentMemoryHash && !box.#booleanLock.lock) {
                            box.verified = 2;
                            console.log('Changes Detected in Process Memory! From Backup Secondary Hash WARNING THIS IS NOT GOOD! You have been warned! This process has been tampered with no doubt about it!');
                        } else if (box.#secondaryMemoryHash === box.#currentMemoryHash && !box.#booleanLock.lock) {
                            box.verified = 2;
                            console.log('No Changes Detected in Process Memory! From Backup Secondary Hash WARNING THIS IS NOT GOOD! You have been warned! This Process may have been tampered with!');
                        }
                    }, 1000);
                }

                process.on('uncaughtException', (err: any) => {
                    console.error('Unhandled Exception:', err);
                });

                process.on('unhandledRejection', (reason: any, promise: any) => {
                    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
                });

                startMonitoring(box);
            }
        }

        return new ThePrivateBox(this.#scope, box);
    }
}

export { PandorasWallSource };
module.exports = { PandorasWallSource };