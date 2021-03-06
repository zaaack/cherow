import { pass, fail } from '../test-utils';

describe('Next - Import meta', () => {

    fail(`import.meta`, {
        source: 'import.meta',
        next: true,
        line: 1
    });

    fail(`var import.meta`, {
        source: 'var import.meta',
        module: true,
        next: true,
        line: 1
    });

    fail(`for (var import.meta of [1]) {}`, {
        source: 'for (var import.meta of [1]) {}',
        module: true,
        next: true,
        line: 1
    });

    fail('"EcamaScript" as property name', {
        source: `import.EcamaScript`,
        module: true,
        next: true,
        message: 'Unexpected token identifier',
        line: 1,
        column: 7,
        index: 7
    });

    pass('"use strict"; ({m() { () => import.meta }})', {
        source: '"use strict"; ({m() { () => import.meta }})',
        next: true,
        module: true,
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            sourceType: 'module',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: 'use strict',
                        start: 0,
                        end: 12,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 12
                            }
                        },
                        raw: '"use strict"'
                    },
                    directive: 'use strict',
                    start: 0,
                    end: 13,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 13
                        }
                    }
                },
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ObjectExpression',
                        properties: [
                            {
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'm',
                                    start: 16,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 16
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                },
                                value: {
                                    type: 'FunctionExpression',
                                    params: [],
                                    body: {
                                        type: 'BlockStatement',
                                        body: [
                                            {
                                                type: 'ExpressionStatement',
                                                expression: {
                                                    type: 'ArrowFunctionExpression',
                                                    body: {
                                                        meta: {
                                                            type: 'Identifier',
                                                            name: 'import',
                                                            start: 28,
                                                            end: 34,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 28
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 34
                                                                }
                                                            }
                                                        },
                                                        type: 'MetaProperty',
                                                        property: {
                                                            type: 'Identifier',
                                                            name: 'meta',
                                                            start: 35,
                                                            end: 39,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 35
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 39
                                                                }
                                                            }
                                                        },
                                                        start: 28,
                                                        end: 39,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 28
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 39
                                                            }
                                                        }
                                                    },
                                                    params: [],
                                                    id: null,
                                                    async: false,
                                                    generator: false,
                                                    expression: true,
                                                    start: 22,
                                                    end: 39,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 22
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 39
                                                        }
                                                    }
                                                },
                                                start: 22,
                                                end: 39,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 22
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 39
                                                    }
                                                }
                                            }
                                        ],
                                        start: 20,
                                        end: 41,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 20
                                            },
                                            end: {
                                                line: 1,
                                                column: 41
                                            }
                                        }
                                    },
                                    async: false,
                                    generator: false,
                                    expression: false,
                                    id: null,
                                    start: 17,
                                    end: 41,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 17
                                        },
                                        end: {
                                            line: 1,
                                            column: 41
                                        }
                                    }
                                },
                                kind: 'init',
                                computed: false,
                                method: true,
                                shorthand: false,
                                start: 16,
                                end: 41,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 16
                                    },
                                    end: {
                                        line: 1,
                                        column: 41
                                    }
                                }
                            }
                        ],
                        start: 15,
                        end: 42,
                        loc: {
                            start: {
                                line: 1,
                                column: 15
                            },
                            end: {
                                line: 1,
                                column: 42
                            }
                        }
                    },
                    start: 14,
                    end: 43,
                    loc: {
                        start: {
                            line: 1,
                            column: 14
                        },
                        end: {
                            line: 1,
                            column: 43
                        }
                    }
                }
            ],
            start: 0,
            end: 43,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 43
                }
            }
        }
    });

    pass('"use strict"; ({m() { while (0) { import.meta } }})', {
        source: '"use strict"; ({m() { while (0) { import.meta } }})',
        next: true,
        module: true,
        raw: true,
        loc: true,
        ranges: true,
        expected: {
            type: 'Program',
            sourceType: 'module',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: 'use strict',
                        start: 0,
                        end: 12,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 12
                            }
                        },
                        raw: '"use strict"'
                    },
                    directive: 'use strict',
                    start: 0,
                    end: 13,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 13
                        }
                    }
                },
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ObjectExpression',
                        properties: [
                            {
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'm',
                                    start: 16,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 16
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                },
                                value: {
                                    type: 'FunctionExpression',
                                    params: [],
                                    body: {
                                        type: 'BlockStatement',
                                        body: [
                                            {
                                                type: 'WhileStatement',
                                                test: {
                                                    type: 'Literal',
                                                    value: 0,
                                                    start: 29,
                                                    end: 30,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 29
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 30
                                                        }
                                                    },
                                                    raw: '0'
                                                },
                                                body: {
                                                    type: 'BlockStatement',
                                                    body: [
                                                        {
                                                            type: 'ExpressionStatement',
                                                            expression: {
                                                                meta: {
                                                                    type: 'Identifier',
                                                                    name: 'import',
                                                                    start: 34,
                                                                    end: 40,
                                                                    loc: {
                                                                        start: {
                                                                            line: 1,
                                                                            column: 34
                                                                        },
                                                                        end: {
                                                                            line: 1,
                                                                            column: 40
                                                                        }
                                                                    }
                                                                },
                                                                type: 'MetaProperty',
                                                                property: {
                                                                    type: 'Identifier',
                                                                    name: 'meta',
                                                                    start: 41,
                                                                    end: 45,
                                                                    loc: {
                                                                        start: {
                                                                            line: 1,
                                                                            column: 41
                                                                        },
                                                                        end: {
                                                                            line: 1,
                                                                            column: 45
                                                                        }
                                                                    }
                                                                },
                                                                start: 34,
                                                                end: 45,
                                                                loc: {
                                                                    start: {
                                                                        line: 1,
                                                                        column: 34
                                                                    },
                                                                    end: {
                                                                        line: 1,
                                                                        column: 45
                                                                    }
                                                                }
                                                            },
                                                            start: 34,
                                                            end: 45,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 34
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 45
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    start: 32,
                                                    end: 47,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 32
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 47
                                                        }
                                                    }
                                                },
                                                start: 22,
                                                end: 47,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 22
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 47
                                                    }
                                                }
                                            }
                                        ],
                                        start: 20,
                                        end: 49,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 20
                                            },
                                            end: {
                                                line: 1,
                                                column: 49
                                            }
                                        }
                                    },
                                    async: false,
                                    generator: false,
                                    expression: false,
                                    id: null,
                                    start: 17,
                                    end: 49,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 17
                                        },
                                        end: {
                                            line: 1,
                                            column: 49
                                        }
                                    }
                                },
                                kind: 'init',
                                computed: false,
                                method: true,
                                shorthand: false,
                                start: 16,
                                end: 49,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 16
                                    },
                                    end: {
                                        line: 1,
                                        column: 49
                                    }
                                }
                            }
                        ],
                        start: 15,
                        end: 50,
                        loc: {
                            start: {
                                line: 1,
                                column: 15
                            },
                            end: {
                                line: 1,
                                column: 50
                            }
                        }
                    },
                    start: 14,
                    end: 51,
                    loc: {
                        start: {
                            line: 1,
                            column: 14
                        },
                        end: {
                            line: 1,
                            column: 51
                        }
                    }
                }
            ],
            start: 0,
            end: 51,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 51
                }
            }
        }
    });

    pass('class C {set x(_) { import.meta[0] }}', {
        source: 'class C {set x(_) { import.meta[0] }}',
        next: true,
        module: true,
        ranges: true,
        loc: true,
        raw: true,
        expected: {
            type: 'Program',
            sourceType: 'module',
            body: [
                {
                    type: 'ClassDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'C',
                        start: 6,
                        end: 7,
                        loc: {
                            start: {
                                line: 1,
                                column: 6
                            },
                            end: {
                                line: 1,
                                column: 7
                            }
                        }
                    },
                    superClass: null,
                    body: {
                        type: 'ClassBody',
                        body: [
                            {
                                type: 'MethodDefinition',
                                kind: 'set',
                                static: false,
                                computed: false,
                                key: {
                                    type: 'Identifier',
                                    name: 'x',
                                    start: 13,
                                    end: 14,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 13
                                        },
                                        end: {
                                            line: 1,
                                            column: 14
                                        }
                                    }
                                },
                                value: {
                                    type: 'FunctionExpression',
                                    params: [
                                        {
                                            type: 'Identifier',
                                            name: '_',
                                            start: 15,
                                            end: 16,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 15
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 16
                                                }
                                            }
                                        }
                                    ],
                                    body: {
                                        type: 'BlockStatement',
                                        body: [
                                            {
                                                type: 'ExpressionStatement',
                                                expression: {
                                                    type: 'MemberExpression',
                                                    object: {
                                                        meta: {
                                                            type: 'Identifier',
                                                            name: 'import',
                                                            start: 20,
                                                            end: 26,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 20
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 26
                                                                }
                                                            }
                                                        },
                                                        type: 'MetaProperty',
                                                        property: {
                                                            type: 'Identifier',
                                                            name: 'meta',
                                                            start: 27,
                                                            end: 31,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 27
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 31
                                                                }
                                                            }
                                                        },
                                                        start: 20,
                                                        end: 31,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 20
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 31
                                                            }
                                                        }
                                                    },
                                                    computed: true,
                                                    property: {
                                                        type: 'Literal',
                                                        value: 0,
                                                        start: 32,
                                                        end: 33,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 32
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 33
                                                            }
                                                        },
                                                        raw: '0'
                                                    },
                                                    start: 20,
                                                    end: 34,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 20
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 34
                                                        }
                                                    }
                                                },
                                                start: 20,
                                                end: 34,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 20
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 34
                                                    }
                                                }
                                            }
                                        ],
                                        start: 18,
                                        end: 36,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 18
                                            },
                                            end: {
                                                line: 1,
                                                column: 36
                                            }
                                        }
                                    },
                                    async: false,
                                    generator: false,
                                    expression: false,
                                    id: null,
                                    start: 14,
                                    end: 36,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 14
                                        },
                                        end: {
                                            line: 1,
                                            column: 36
                                        }
                                    }
                                },
                                start: 9,
                                end: 36,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 9
                                    },
                                    end: {
                                        line: 1,
                                        column: 36
                                    }
                                }
                            }
                        ],
                        start: 8,
                        end: 37,
                        loc: {
                            start: {
                                line: 1,
                                column: 8
                            },
                            end: {
                                line: 1,
                                column: 37
                            }
                        }
                    },
                    start: 0,
                    end: 37,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 37
                        }
                    }
                }
            ],
            start: 0,
            end: 37,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 37
                }
            }
        }
    });

    pass('() => import.meta', {
        source: '() => import.meta',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    async: false,
                    body: {
                      meta: {
                        name: 'import',
                        type: 'Identifier'
                      },
                      property: {
                        name: 'meta',
                        type: 'Identifier',
                      },
                      type: 'MetaProperty'
                    },
                    expression: true,
                    generator: false,
                    id: null,
                    params: [],
                    type: 'ArrowFunctionExpression'
                  },
                  type: 'ExpressionStatement'
                }
              ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('if (1) {} else { import.meta }', {
        source: 'if (1) {} else { import.meta }',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  alternate: {
                    body: [
                      {
                        expression: {
                          meta: {
                            name: 'import',
                            type: 'Identifier'
                          },
                          property: {
                            name: 'meta',
                            type: 'Identifier'
                          },
                          type: 'MetaProperty'
                        },
                        type: 'ExpressionStatement'
                      }
                    ],
                    type: 'BlockStatement'
                  },
                  consequent: {
                    body: [],
                    type: 'BlockStatement'
                  },
                  test: {
                    type: 'Literal',
                    value: 1,
                  },
                  type: 'IfStatement'
                }
              ],
             sourceType: 'module',
              type: 'Program'
            }
    });

    pass('import.meta[0]', {
        source: 'import.meta[0]',
        next: true,
        module: true,
        expected: {
              body: [
               {
                  expression: {
                    computed: true,
                    object: {
                      meta: {
                        name: 'import',
                        type: 'Identifier'
                      },
                      property: {
                        name: 'meta',
                        type: 'Identifier'
                      },
                      type: 'MetaProperty',
                    },
                    property: {
                      type: 'Literal',
                      value: 0,
                    },
                    type: 'MemberExpression'
                  },
                  type: 'ExpressionStatement'
                }
             ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('import.meta.couldBeMutable = true', {
        source: 'import.meta.couldBeMutable = true',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    left: {
                      computed: false,
                      object: {
                        meta: {
                          name: 'import',
                          type: 'Identifier',
                        },
                        property: {
                          name: 'meta',
                          type: 'Identifier',
                        },
                        type: 'MetaProperty',
                      },
                      property: {
                        name: 'couldBeMutable',
                        type: 'Identifier',
                      },
                      type: 'MemberExpression',
                    },
                    operator: '=',
                    right: {
                      type: 'Literal',
                      value: true,
                    },
                    type: 'AssignmentExpression'
                 },
                  type: 'ExpressionStatement'
               }
              ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('import.meta()', {
        source: 'import.meta()',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    arguments: [],
                    callee: {
                      meta: {
                        name: 'import',
                        type: 'Identifier',
                      },
                      property: {
                        name: 'meta',
                        type: 'Identifier',
                      },
                      type: 'MetaProperty',
                    },
                    type: 'CallExpression'
                  },
                  type: 'ExpressionStatement'
                }
              ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('t = [...import.meta]', {
        source: 't = [...import.meta]',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    left: {
                      name: 't',
                      type: 'Identifier'
                    },
                    operator: '=',
                    right: {
                      elements: [
                        {
                          argument: {
                            meta: {
                              name: 'import',
                              type: 'Identifier'
                            },
                            property: {
                              name: 'meta',
                              type: 'Identifier'
                            },
                            type: 'MetaProperty'
                          },
                          type: 'SpreadElement'
                        }
                      ],
                      type: 'ArrayExpression'
                    },
                    type: 'AssignmentExpression'
                  },
                 type: 'ExpressionStatement'
                }
              ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('delete import.meta', {
        source: 'delete import.meta',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    argument: {
                      meta: {
                        name: 'import',
                        type: 'Identifier'
                      },
                      property: {
                        name: 'meta',
                        type: 'Identifier'
                      },
                      type: 'MetaProperty',
                    },
                    operator: 'delete',
                    prefix: true,
                    type: 'UnaryExpression'
                  },
                  type: 'ExpressionStatement'
                }
             ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('f = {...import.meta}', {
        source: 'f = {...import.meta}',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    left: {
                      name: 'f',
                      type: 'Identifier'
                    },
                    operator: '=',
                    right: {
                      properties: [
                        {
                          argument: {
                            meta: {
                              name: 'import',
                              type: 'Identifier'
                            },
                            property: {
                              name: 'meta',
                              type: 'Identifier'
                            },
                            type: 'MetaProperty'
                          },
                          type: 'SpreadElement'
                        }
                      ],
                      type: 'ObjectExpression'
                    },
                    type: 'AssignmentExpression'
                  },
                  type: 'ExpressionStatement'
               }
             ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass('import.meta.url', {
        source: 'import.meta.url',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                   computed: false,
                    object: {
                      meta: {
                       name: 'import',
                        type: 'Identifier'
                      },
                      property: {
                        name: 'meta',
                        type: 'Identifier'
                      },
                      type: 'MetaProperty',
                    },
                    property: {
                      name: 'url',
                      type: 'Identifier'
                    },
                    type: 'MemberExpression'
                  },
                  type: 'ExpressionStatement'
               }
              ],
             sourceType: 'module',
              type: 'Program'
            }
    });

    pass('() => { import.meta }', {
        source: '() => { import.meta }',
        next: true,
        module: true,
        expected: {
              body: [
                {
                  expression: {
                    async: false,
                    body: {
                      body: [
                      {
                          expression: {
                            meta: {
                              name: 'import',
                              type: 'Identifier'
                            },
                            property: {
                              name: 'meta',
                              type: 'Identifier',
                            },
                            type: 'MetaProperty'
                          },
                          type: 'ExpressionStatement'
                        }
                      ],
                      type: 'BlockStatement',
                    },
                    expression: false,
                    generator: false,
                    id: null,
                    params: [],
                    type: 'ArrowFunctionExpression'
                 },
                  type: 'ExpressionStatement'
                }
              ],
              sourceType: 'module',
              type: 'Program'
            }
    });

    pass(`one dot and no assignment`, {
      source: 'import.meta;',
      loc: true,
      ranges: true,
      next: true,
      raw: true,
      module: true,
      expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExpressionStatement',
                  expression: {
                      meta: {
                          type: 'Identifier',
                          name: 'import',
                          start: 0,
                          end: 6,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 6
                              }
                          }
                      },
                      type: 'MetaProperty',
                      property: {
                          type: 'Identifier',
                          name: 'meta',
                          start: 7,
                          end: 11,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 7
                              },
                              end: {
                                  line: 1,
                                  column: 11
                              }
                          }
                      },
                      start: 0,
                      end: 11,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 11
                          }
                      }
                  },
                  start: 0,
                  end: 12,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 12
                      }
                  }
              }
          ],
          sourceType: 'module',
          start: 0,
          end: 12,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 12
              }
          }
      }
  });

    pass(`const response = fetch(import.meta.url);`, {
    source: 'const response = fetch(import.meta.url);',
    loc: true,
    ranges: true,
    next: true,
    module: true,
    expected: {
        type: 'Program',
        sourceType: 'module',
        body: [
            {
                type: 'VariableDeclaration',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        init: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'fetch',
                                start: 17,
                                end: 22,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 17
                                    },
                                    end: {
                                        line: 1,
                                        column: 22
                                    }
                                }
                            },
                            arguments: [
                                {
                                    type: 'MemberExpression',
                                    object: {
                                        meta: {
                                            type: 'Identifier',
                                            name: 'import',
                                            start: 23,
                                            end: 29,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 23
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 29
                                                }
                                            }
                                        },
                                        type: 'MetaProperty',
                                        property: {
                                            type: 'Identifier',
                                            name: 'meta',
                                            start: 30,
                                            end: 34,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 30
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 34
                                                }
                                            }
                                        },
                                        start: 23,
                                        end: 34,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 23
                                            },
                                            end: {
                                                line: 1,
                                                column: 34
                                            }
                                        }
                                    },
                                    computed: false,
                                    property: {
                                        type: 'Identifier',
                                        name: 'url',
                                        start: 35,
                                        end: 38,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 35
                                            },
                                            end: {
                                                line: 1,
                                                column: 38
                                            }
                                        }
                                    },
                                    start: 23,
                                    end: 38,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 23
                                        },
                                        end: {
                                            line: 1,
                                            column: 38
                                        }
                                    }
                                }
                            ],
                            start: 17,
                            end: 39,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 17
                                },
                                end: {
                                    line: 1,
                                    column: 39
                                }
                            }
                        },
                        id: {
                            type: 'Identifier',
                            name: 'response',
                            start: 6,
                            end: 14,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 6
                                },
                                end: {
                                    line: 1,
                                    column: 14
                                }
                            }
                        },
                        start: 6,
                        end: 39,
                        loc: {
                            start: {
                                line: 1,
                                column: 6
                            },
                            end: {
                                line: 1,
                                column: 39
                            }
                        }
                    }
                ],
                kind: 'const',
                start: 0,
                end: 40,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 40
                    }
                }
            }
        ],
        start: 0,
        end: 40,
        loc: {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 1,
                column: 40
            }
        }
    }
  });

    pass(`const size = import.meta.scriptElement.dataset.size || 300;`, {
    source: 'const size = import.meta.scriptElement.dataset.size || 300;',
    loc: true,
    ranges: true,
    next: true,
    module: true,
    expected: {
        type: 'Program',
        sourceType: 'module',
        body: [
            {
                type: 'VariableDeclaration',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        init: {
                            type: 'LogicalExpression',
                            left: {
                                type: 'MemberExpression',
                                object: {
                                    type: 'MemberExpression',
                                    object: {
                                        type: 'MemberExpression',
                                        object: {
                                            meta: {
                                                type: 'Identifier',
                                                name: 'import',
                                                start: 13,
                                                end: 19,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 13
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 19
                                                    }
                                                }
                                            },
                                            type: 'MetaProperty',
                                            property: {
                                                type: 'Identifier',
                                                name: 'meta',
                                                start: 20,
                                                end: 24,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 20
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 24
                                                    }
                                                }
                                            },
                                            start: 13,
                                            end: 24,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 13
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 24
                                                }
                                            }
                                        },
                                        computed: false,
                                        property: {
                                            type: 'Identifier',
                                            name: 'scriptElement',
                                            start: 25,
                                            end: 38,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 25
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 38
                                                }
                                            }
                                        },
                                        start: 13,
                                        end: 38,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 13
                                            },
                                            end: {
                                                line: 1,
                                                column: 38
                                            }
                                        }
                                    },
                                    computed: false,
                                    property: {
                                        type: 'Identifier',
                                        name: 'dataset',
                                        start: 39,
                                        end: 46,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 39
                                            },
                                            end: {
                                                line: 1,
                                                column: 46
                                            }
                                        }
                                    },
                                    start: 13,
                                    end: 46,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 13
                                        },
                                        end: {
                                            line: 1,
                                            column: 46
                                        }
                                    }
                                },
                                computed: false,
                                property: {
                                    type: 'Identifier',
                                    name: 'size',
                                    start: 47,
                                    end: 51,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 47
                                        },
                                        end: {
                                            line: 1,
                                            column: 51
                                        }
                                    }
                                },
                                start: 13,
                                end: 51,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 13
                                    },
                                    end: {
                                        line: 1,
                                        column: 51
                                    }
                                }
                            },
                            right: {
                                type: 'Literal',
                                value: 300,
                                start: 55,
                                end: 58,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 55
                                    },
                                    end: {
                                        line: 1,
                                        column: 58
                                    }
                                }
                            },
                            operator: '||',
                            start: 13,
                            end: 58,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 13
                                },
                                end: {
                                    line: 1,
                                    column: 58
                                }
                            }
                        },
                        id: {
                            type: 'Identifier',
                            name: 'size',
                            start: 6,
                            end: 10,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 6
                                },
                                end: {
                                    line: 1,
                                    column: 10
                                }
                            }
                        },
                        start: 6,
                        end: 58,
                        loc: {
                            start: {
                                line: 1,
                                column: 6
                            },
                            end: {
                                line: 1,
                                column: 58
                            }
                        }
                    }
                ],
                kind: 'const',
                start: 0,
                end: 59,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 59
                    }
                }
            }
        ],
        start: 0,
        end: 59,
        loc: {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 1,
                column: 59
            }
        }
    }
  });

    pass(`import.meta.resolve('something')`, {
    source: 'import.meta.resolve("something")',
    loc: true,
    ranges: true,
    next: true,
    raw: true,
    module: true,
    expected: {
        type: 'Program',
        sourceType: 'module',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: {
                        type: 'MemberExpression',
                        object: {
                            meta: {
                                type: 'Identifier',
                                name: 'import',
                                start: 0,
                                end: 6,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 0
                                    },
                                    end: {
                                        line: 1,
                                        column: 6
                                    }
                                }
                            },
                            type: 'MetaProperty',
                            property: {
                                type: 'Identifier',
                                name: 'meta',
                                start: 7,
                                end: 11,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 7
                                    },
                                    end: {
                                        line: 1,
                                        column: 11
                                    }
                                }
                            },
                            start: 0,
                            end: 11,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 11
                                }
                            }
                        },
                        computed: false,
                        property: {
                            type: 'Identifier',
                            name: 'resolve',
                            start: 12,
                            end: 19,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 12
                                },
                                end: {
                                    line: 1,
                                    column: 19
                                }
                            }
                        },
                        start: 0,
                        end: 19,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 19
                            }
                        }
                    },
                    arguments: [
                        {
                            type: 'Literal',
                            value: 'something',
                            start: 20,
                            end: 31,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 20
                                },
                                end: {
                                    line: 1,
                                    column: 31
                                }
                            },
                            raw: '"something"'
                        }
                    ],
                    start: 0,
                    end: 32,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 32
                        }
                    }
                },
                start: 0,
                end: 32,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 32
                    }
                }
            }
        ],
        start: 0,
        end: 32,
        loc: {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 1,
                column: 32
            }
        }
    }
  });

    pass(`two dots and no assignments`, {
    source: 'import.meta.url;',
    loc: true,
    ranges: true,
    next: true,
    raw: true,
    module: true,
    expected: {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'MemberExpression',
                    object: {
                        meta: {
                            type: 'Identifier',
                            name: 'import',
                            start: 0,
                            end: 6,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 6
                                }
                            }
                        },
                        type: 'MetaProperty',
                        property: {
                            type: 'Identifier',
                            name: 'meta',
                            start: 7,
                            end: 11,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 7
                                },
                                end: {
                                    line: 1,
                                    column: 11
                                }
                            }
                        },
                        start: 0,
                        end: 11,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 11
                            }
                        }
                    },
                    computed: false,
                    property: {
                        type: 'Identifier',
                        name: 'url',
                        start: 12,
                        end: 15,
                        loc: {
                            start: {
                                line: 1,
                                column: 12
                            },
                            end: {
                                line: 1,
                                column: 15
                            }
                        }
                    },
                    start: 0,
                    end: 15,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 15
                        }
                    }
                },
                start: 0,
                end: 16,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 16
                    }
                }
            }
        ],
        sourceType: 'module',
        start: 0,
        end: 16,
        loc: {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 1,
                column: 16
            }
        }
    }
});

    pass(`two dots and boolean assignment`, {
    source: 'import.meta.couldBeMutable = true;',
    loc: true,
    ranges: true,
    next: true,
    module: true,
    expected: {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    left: {
                        type: 'MemberExpression',
                        object: {
                            meta: {
                                type: 'Identifier',
                                name: 'import',
                                start: 0,
                                end: 6,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 0
                                    },
                                    end: {
                                        line: 1,
                                        column: 6
                                    }
                                }
                            },
                            type: 'MetaProperty',
                            property: {
                                type: 'Identifier',
                                name: 'meta',
                                start: 7,
                                end: 11,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 7
                                    },
                                    end: {
                                        line: 1,
                                        column: 11
                                    }
                                }
                            },
                            start: 0,
                            end: 11,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 11
                                }
                            }
                        },
                        computed: false,
                        property: {
                            type: 'Identifier',
                            name: 'couldBeMutable',
                            start: 12,
                            end: 26,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 12
                                },
                                end: {
                                    line: 1,
                                    column: 26
                                }
                            }
                        },
                        start: 0,
                        end: 26,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 26
                            }
                        }
                    },
                    operator: '=',
                    right: {
                        type: 'Literal',
                        value: true,
                        start: 29,
                        end: 33,
                        loc: {
                            start: {
                                line: 1,
                                column: 29
                            },
                            end: {
                                line: 1,
                                column: 33
                            }
                        }
                    },
                    start: 0,
                    end: 33,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 33
                        }
                    }
                },
                start: 0,
                end: 34,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 34
                    }
                }
            }
        ],
        sourceType: 'module',
        start: 0,
        end: 34,
        loc: {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 1,
                column: 34
            }
        }
    }
});

    pass(`let meta = import.meta;
export {
    meta as cocoa
}`, {
    source: `let meta = import.meta;
    export {
        meta as cocoa
    }`,
    loc: true,
    ranges: true,
    next: true,
    raw: true,
    module: true,
    expected: {
        type: 'Program',
        sourceType: 'module',
        body: [
            {
                type: 'VariableDeclaration',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        init: {
                            meta: {
                                type: 'Identifier',
                                name: 'import',
                                start: 11,
                                end: 17,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 11
                                    },
                                    end: {
                                        line: 1,
                                        column: 17
                                    }
                                }
                            },
                            type: 'MetaProperty',
                            property: {
                                type: 'Identifier',
                                name: 'meta',
                                start: 18,
                                end: 22,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 18
                                    },
                                    end: {
                                        line: 1,
                                        column: 22
                                    }
                                }
                            },
                            start: 11,
                            end: 22,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 11
                                },
                                end: {
                                    line: 1,
                                    column: 22
                                }
                            }
                        },
                        id: {
                            type: 'Identifier',
                            name: 'meta',
                            start: 4,
                            end: 8,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 4
                                },
                                end: {
                                    line: 1,
                                    column: 8
                                }
                            }
                        },
                        start: 4,
                        end: 22,
                        loc: {
                            start: {
                                line: 1,
                                column: 4
                            },
                            end: {
                                line: 1,
                                column: 22
                            }
                        }
                    }
                ],
                kind: 'let',
                start: 0,
                end: 23,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 23
                    }
                }
            },
            {
                type: 'ExportNamedDeclaration',
                source: null,
                specifiers: [
                    {
                        type: 'ExportSpecifier',
                        local: {
                            type: 'Identifier',
                            name: 'meta',
                            start: 45,
                            end: 49,
                            loc: {
                                start: {
                                    line: 3,
                                    column: 8
                                },
                                end: {
                                    line: 3,
                                    column: 12
                                }
                            }
                        },
                        exported: {
                            type: 'Identifier',
                            name: 'cocoa',
                            start: 53,
                            end: 58,
                            loc: {
                                start: {
                                    line: 3,
                                    column: 16
                                },
                                end: {
                                    line: 3,
                                    column: 21
                                }
                            }
                        },
                        start: 45,
                        end: 58,
                        loc: {
                            start: {
                                line: 3,
                                column: 8
                            },
                            end: {
                                line: 3,
                                column: 21
                            }
                        }
                    }
                ],
                declaration: null,
                start: 28,
                end: 64,
                loc: {
                    start: {
                        line: 2,
                        column: 4
                    },
                    end: {
                        line: 4,
                        column: 5
                    }
                }
            }
        ],
        start: 0,
        end: 64,
        loc: {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 4,
                column: 5
            }
        }
    }
});
});
