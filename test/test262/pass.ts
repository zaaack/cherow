import parserTest262 from '../tools/test262';
import * as path from 'path';
import { parseScript, parseModule } from '../../src/cherow';

describe('test262 tests', () => parserTest262({
    test262Dir: path.join(__dirname, '../../', 'node_modules', 'test262'),
    annexB: true,
    test: it,
    skip: [],
    ignore: [

        'test/language/statements/async-generator/dflt-params-duplicates.js',
        'test/language/statements/async-function/syntax-declaration-no-line-terminator.js',
        'test/language/statements/async-function/early-errors-declaration-formals-body-duplicate.js',
        'test/language/statements/async-function/early-errors-declaration-formals-body-duplicate.js',
        'test/language/statements/async-function/early-errors-declaration-eval-in-formal-parameters.js',
        'test/language/statements/async-function/early-errors-declaration-arguments-in-formal-parameters.js',
        'test/language/statements/async-function/early-errors-declaration-duplicate-parameters.js',
        'test/language/statements/async-function/dflt-params-duplicates.js',
        'test/language/statements/class/syntax/early-errors/class-definition-evaluation-scriptbody-duplicate-binding.js',
        'test/language/statements/class/syntax/early-errors/class-definition-evaluation-block-duplicate-binding.js',
        'test/language/statements/class/syntax/early-errors/class-definition-evaluation-block-duplicate-binding.js',
        'test/language/statements/class/classelementname-abrupt-completion.js',
        'test/language/statements/class/definition/early-errors-class-method-formals-body-duplicate.js',
        'test/language/statements/class/accessor-name-static-literal-string-line-continuation.js',
        'test/language/statements/class/accessor-name-inst-literal-string-line-continuation.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-8.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-7.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-6.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-5.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-4.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-3.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-2.js',
        'test/language/statements/class/privatename-not-valid-earlyerr-script-1.js',
        'test/language/statements/const/redeclaration-error-from-within-strict-mode-function-const.js',
        'test/language/statements/class/privatename-not-valid-eval-earlyerr-3.js',
        'test/language/computed-property-names/class/static/setter-prototype.js',
        'test/language/computed-property-names/class/static/getter-prototype.js',
        'test/language/statements/class/definition/setters-non-configurable-err.js',
        'test/language/statements/class/definition/getters-non-configurable-err.js',
        'test/language/expressions/class/fields-direct-eval-err-contains-newtarget.js',
        'test/language/statements/switch/syntax/redeclaration/**/*.js',
        'test/language/statements/for/head-let-bound-names-in-stmt.js',
        'test/language/statements/for-of/head-let-bound-names-in-stmt.js',
        'test/language/statements/for-of/head-let-bound-names-dup.js',
        'test/language/statements/for-of/head-const-bound-names-dup.js',
        'test/language/statements/for-in/head-let-bound-names-in-stmt.js',
        'test/language/statements/for-in/head-let-bound-names-dup.js',
        'test/language/statements/for-in/head-const-bound-names-dup.js',
        'test/annexB/language/statements/for-in/nonstrict-initializer.js',
        'test/language/statements/do-while/S12.6.1_A8.js',
        'test/language/statements/function/dflt-params-duplicates.js',
        'test/language/statements/generators/dflt-params-duplicates.js',
        'test/language/statements/let/syntax/attempt-to-redeclare-let-binding-with-var.js',
        'test/language/statements/let/syntax/attempt-to-redeclare-let-binding-with-var.js',
        'test/language/statements/let/syntax/attempt-to-redeclare-let-binding-with-function-declaration.js',
        'test/language/statements/let/redeclaration-error-from-within-strict-mode-function.js',
        'test/language/statements/labeled/continue.js',
        'test/language/statements/with/12.10.1-10-s.js',
        'test/language/statements/try/early-catch-var.js',
        'test/language/statements/try/early-catch-lex.js',
        'test/language/statements/with/12.10.1-8-s.js',
        'test/language/statements/try/catch-parameter-boundnames-restriction-arguments-negative-early.js',
        'test/language/statements/with/12.10.1-4-s.js',
        'test/language/statements/with/12.10.1-12-s.js',
        'test/language/block-scope/syntax/**/*.js',
        'test/language/block-scope/shadowing/**/*.js',
        'test/language/eval-code/direct/global-env-rec-eval.js',
        'test/language/eval-code/direct/switch-case-decl-strict-caller.js',
        'test/language/eval-code/direct/switch-case-decl-strict-source.js',
        'test/language/eval-code/direct/switch-dflt-decl-strict-caller.js',
        'test/language/eval-code/direct/switch-dflt-decl-strict-source.js',
        'test/language/eval-code/indirect/global-env-rec-eval.js',
        'test/language/eval-code/indirect/switch-case-decl-strict.js',
        'test/language/eval-code/indirect/switch-dflt-decl-strict.js',
        'test/language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates.js',
        'test/language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-rest.js',
        'test/language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object-6.js',
        'test/language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-object*.js',
        'test/language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array-3.js',
        'test/language/expressions/arrow-function/syntax/early-errors/arrowparameters-cover-no-duplicates-binding-array*.js',
        'test/language/expressions/arrow-function/dflt-params-duplicates.js',
        'test/language/expressions/assignment/target-string.js',
        'test/language/expressions/assignment/target-number.js',
        'test/language/expressions/assignment/target-null.js',
        'test/language/expressions/assignment/target-cover-yieldexpr.js',
        'test/language/expressions/assignment/target-boolean.js',
        'test/language/expressions/assignment/non-simple-target.js',
        'test/language/expressions/assignment/dstr-obj-rest-not-last-element-invalid.js',
        'test/language/expressions/assignment/destructuring/obj-prop-__proto__dup.js',
        'test/language/expressions/async-arrow-function/dflt-params-duplicates.js',
        'test/language/expressions/async-generator/named-dflt-params-duplicates.js',
        'test/language/expressions/async-generator/early-errors-expression-not-simple-assignment-target.js',
        'test/language/expressions/async-generator/early-errors-expression-formals-body-duplicate-let.js',
        'test/language/expressions/async-generator/early-errors-expression-formals-body-duplicate-const.js',
        'test/language/expressions/async-generator/dflt-params-duplicates.js',
        'test/language/expressions/await/early-errors-await-not-simple-assignment-target.js',
        'test/language/expressions/class/accessor-name-inst-literal-string-line-continuation.js',
        'test/language/expressions/class/accessor-name-static-literal-string-line-continuation.js',
        'test/language/expressions/class/fields-derived-cls-direct-eval-err-contains-supercall-2.js',
        'test/language/expressions/class/fields-derived-cls-direct-eval-err-contains-supercall-1.js',
        'test/language/expressions/class/fields-derived-cls-direct-eval-err-contains-supercall.js',
        'test/language/expressions/class/fields-direct-eval-err-contains-arguments.js',
        'test/language/expressions/class/fields-duplicate-privatenames.js',
        'test/language/expressions/class/fields-equality-init-err-contains-arguments.js',
        'test/language/expressions/class/fields-string-name-propname-constructor.js',
        'test/language/expressions/class/fields-literal-name-propname-constructor.js',
        'test/language/expressions/class/fields-string-name-propname-constructor.js',
        'test/language/expressions/class/fields-derived-cls-direct-eval-err-contains-superproperty-1.js',
        'test/language/expressions/class/fields-derived-cls-direct-eval-err-contains-superproperty-2.js',
        'test/language/statements/class/fields-derived-cls-direct-eval-err-contains-supercall-2.js',
        'test/language/statements/class/fields-derived-cls-direct-eval-err-contains-supercall-1.js',
        'test/language/statements/class/fields-derived-cls-direct-eval-err-contains-supercall.js',
        'test/language/statements/class/fields-derived-cls-direct-eval-err-contains-superproperty-1.js',
        'test/language/statements/class/fields-derived-cls-direct-eval-err-contains-superproperty-2.js',
        'test/language/statements/class/fields-direct-eval-err-contains-arguments.js',
        'test/language/statements/class/fields-direct-eval-err-contains-newtarget.js',
        'test/language/statements/class/fields-duplicate-privatenames.js',
        'test/language/statements/class/fields-duplicate-privatenames.js',
        'test/language/statements/class/fields-equality-init-err-contains-arguments.js',
        'test/language/statements/class/fields-literal-name-propname-constructor.js',
        'test/language/statements/class/fields-string-name-propname-constructor.js',
        'test/language/expressions/compound-assignment/u-right-shift-non-simple.js',
        'test/language/expressions/compound-assignment/subtract-non-simple.js',
        'test/language/expressions/compound-assignment/subtract-non-simple.js',
        'test/language/expressions/compound-assignment/right-shift-non-simple.js',
        'test/language/expressions/compound-assignment/mult-non-simple.js',
        'test/language/expressions/compound-assignment/mod-div-non-simple.js',
        'test/language/expressions/compound-assignment/left-shift-non-simple.js',
        'test/language/expressions/compound-assignment/div-non-simple.js',
        'test/language/expressions/compound-assignment/btws-xor-non-simple.js',
        'test/language/expressions/compound-assignment/btws-or-non-simple.js',
        'test/language/expressions/compound-assignment/btws-and-non-simple.js',
        'test/language/expressions/compound-assignment/add-non-simple.js',
        'test/language/expressions/yield/star-in-rltn-expr.js',
        'test/language/expressions/function/dflt-params-duplicates.js',
        'test/language/expressions/object/method-definition/name-param-redecl.js',
        'test/language/expressions/object/method-definition/meth-dflt-params-duplicates.js',
        'test/language/expressions/object/method-definition/meth-dflt-params-abrupt.js',
        'test/language/expressions/object/method-definition/generator-param-redecl-const.js',
        'test/language/expressions/object/method-definition/generator-param-redecl-let.js',
        'test/language/expressions/object/method-definition/gen-meth-dflt-params-duplicates.js',
        'test/language/expressions/object/accessor-name-literal-string-line-continuation.js',
        'test/language/expressions/object/cover-initialized-name.js',
        'test/language/expressions/object/method-definition/early-errors-object-method-duplicate-parameters.js',
        'test/language/expressions/object/method-definition/early-errors-object-method-arguments-in-formal-parameters.js',
        'test/language/expressions/object/method-definition/async-meth-dflt-params-duplicates.js',
        'test/language/expressions/object/method-definition/async-meth-dflt-params-abrupt.js',
        'test/language/expressions/object/method-definition/async-gen-meth-dflt-params-duplicates.js',
        'test/language/expressions/this/S11.1.1_A1.js',
        'test/language/expressions/tagged-template/invalid-escape-sequences.js',
        'test/language/expressions/prefix-increment/target-newtarget.js',
        'test/language/expressions/prefix-increment/target-cover-yieldexpr.js',
        'test/language/expressions/prefix-increment/target-cover-newtarget.js',
        'test/language/expressions/prefix-increment/non-simple.js',
        'test/language/expressions/prefix-increment/11.4.4-2-2-s.js',
        'test/language/expressions/postfix-increment/target-newtarget.js',
        'test/language/expressions/postfix-increment/target-cover-yieldexpr.js',
        'test/language/expressions/postfix-increment/target-cover-newtarget.js',
        'test/language/expressions/postfix-increment/non-simple.js',
        'test/language/expressions/postfix-increment/11.3.1-2-1-s.js',
        'test/language/expressions/prefix-decrement/target-newtarget.js',
        'test/language/expressions/prefix-decrement/target-cover-yieldexpr.js',
        'test/language/expressions/prefix-decrement/target-cover-newtarget.js',
        'test/language/expressions/class/fields-derived-cls-direct-eval-err-contains-supercall-2.js',
        'test/language/expressions/prefix-decrement/non-simple.js',
        'test/language/expressions/postfix-decrement/target-newtarget.js',
        'test/language/expressions/postfix-decrement/target-cover-yieldexpr.js',
        'test/language/expressions/postfix-decrement/target-cover-newtarget.js',
        'test/language/expressions/postfix-decrement/non-simple.js',
        'test/language/expressions/prefix-decrement/11.4.5-2-2gs.js',
        'test/language/expressions/postfix-decrement/11.3.2-2-2-s.js',
        'test/language/expressions/generators/dflt-params-duplicates.js',
        'test/language/expressions/async-function/nameless-dflt-params-duplicates.js',
        'test/language/expressions/async-function/named-dflt-params-duplicates.js',
        'test/language/expressions/async-function/early-errors-expression-not-simple-assignment-target.js',
        'test/language/expressions/async-function/early-errors-expression-formals-body-duplicate.js',
        'test/language/import/dup-bound-names.js',
        'test/language/literals/string/7.8.4-1-s.js',
        'test/language/literals/regexp/**/*.js',
        'test/language/module-code/**/*.js',
        'test/language/directive-prologue/10.1.1-23-s.js',
        'test/language/directive-prologue/10.1.1-24-s.js',
        'test/language/directive-prologue/14.1-4-s.js',
        'test/language/directive-prologue/14.1-5gs.js',
        'test/language/types/reference/S8.7.2_A1_T2.js',
        'test/language/types/reference/S8.7.2_A1_T1.js',
        'test/language/types/boolean/S8.3_A2.2.js',
        'test/language/types/boolean/S8.3_A2.1.js',
        'test/language/expressions/assignment/dstr-array-elem-target-simple-no-strict.js',
        'test/language/asi/S7.9_A5.7_T1.js',
        'test/language/line-terminators/S7.3_A2.3.js',
        'test/language/line-terminators/S7.3_A2.4.js',
        'test/language/expressions/arrow-function/dflt-params-ref-later.js',
        'test/language/expressions/arrow-function/dflt-params-ref-prior.js',
        'test/language/expressions/arrow-function/dflt-params-trailing-comma.js',
        'test/language/expressions/arrow-function/length-dflt.js',
        'test/language/expressions/arrow-function/params-trailing-comma-multiple.js',
        'test/language/expressions/arrow-function/syntax/arrowparameters-cover-includes-rest-concisebody-functionbody.js',
        'test/language/expressions/arrow-function/syntax/variations.js',
        'test/language/expressions/async-arrow-function/dflt-params-arg-val-undefined.js',
        'test/language/expressions/async-arrow-function/dflt-params-ref-prior.js',
        'test/language/expressions/async-arrow-function/params-trailing-comma-multiple.js',
        'test/language/expressions/prefix-decrement/11.4.5-2-2-s.js',
        'test/language/expressions/arrow-function/dflt-params-arg-val-undefined.js',
        'test/language/expressions/postfix-decrement/11.3.2-2-1-s.js',
        'test/language/expressions/async-arrow-function/dflt-params-trailing-comma.js',
        'test/language/expressions/async-arrow-function/dflt-params-ref-later.js',
        'test/language/expressions/async-arrow-function/dflt-params-arg-val-not-undefined.js',
        'test/language/expressions/assignment/dstr-array-elem-init-simple-no-strict.js',
        'test/language/expressions/arrow-function/dflt-params-arg-val-not-undefined.js',
        'test/language/literals/numeric/numeric-separator-literal-unicode-err.js',
        'test/language/literals/numeric/numeric-separator-literal-oil-nsl-od-err.js',
        'test/language/literals/numeric/numeric-separator-literal-oil-nsl-od-dunder-err.js',
        'test/language/literals/numeric/numeric-separator-literal-nzd-nsl-dds-dunder-err.js',
        'test/language/literals/numeric/numeric-separator-literal-hil-nsl-hd-err.js',
        'test/language/literals/numeric/numeric-separator-literal-hil-nsl-hd-dunder-err.js',
        'test/language/literals/numeric/numeric-separator-literal-hil-hd-nsl-hd-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dot-nsl-ep-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dot-dds-nsl-ep-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dil-dot-nsl-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dil-dot-dds-nsl-ep-dd-err.js',
        'test/language/literals/numeric/numeric-separator-literal-bil-nsl-bd-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dd-nsl-dds-dunder-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dot-nsl-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dil-dot-nsl-ep-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dds-nsl-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dds-nsl-dds-dunder-err.js',
        'test/language/literals/numeric/numeric-separator-literal-bil-nsl-bd-dunder-err.js',
        'test/language/literals/numeric/numeric-separator-literal-dd-nsl-err.js',
        'test/language/literals/numeric/numeric-separator-literal-bil-nsl-bd-dunder-err.js',
        'test/language/expressions/arrow-function/dstr-ary-ptrn-rest-not-final-ary.js',
        'test/language/expressions/arrow-function/dstr-ary-ptrn-rest-not-final-id.js',
        'test/language/expressions/arrow-function/dstr-ary-ptrn-rest-not-final-obj.js',
        'test/language/expressions/tagged-template/cache-eval-inner-function.js',
        'test/language/expressions/arrow-function/lexical-new.target-closure-returned.js',

        /** This are commented out because of "static field" support (stage 2) */
        'test/language/expressions/class/fields-initializer-static-public-fields-forbidden.js',
        'test/language/expressions/class/fields-literal-name-static-public-fields-forbidden.js',
        'test/language/statements/class/fields-initializer-static-public-fields-forbidden.js',
        'test/language/statements/class/fields-literal-name-static-public-fields-forbidden.js',
    ],
    parse: (file: string, source: string, opts: any) => {
        const cherowOpts = {
            impliedStrict: opts.type === 'strict',
            next: true
        };

        if (opts.type === 'module') return parseModule(source, cherowOpts);
        return parseScript(source, cherowOpts);
    },
}));