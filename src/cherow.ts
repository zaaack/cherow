import * as ESTree from './estree';
import { Parser } from './parser';
import { Context } from './flags';

export type PluginHandler = (core: any) => void;

export type Delegate = (node: any) => void;

export interface Options {
    comments ?: boolean;
    plugins ?: PluginHandler[];
    next ?: boolean;
    ranges ?: boolean;
    offset ?: boolean;
    source ?: string;
    loc ?: boolean;
    raw ?: boolean;
    jsx ?: boolean;
    delegate ?: Delegate;
    tolerate ?: boolean;
    impliedStrict ?: boolean;
}

export const pluginClassCache: {
    [key: string]: any
} = {};

function parse(source: string, context: Context, options: Options | void): ESTree.Program {

    let sourceFile: string = '';

    let Cherow;
    let delegate: Delegate | null = null;

    if (options != null) {

        if (options.source) sourceFile = options.source;

        if (typeof options.delegate === 'function') {
            delegate = options.delegate;
            context |= Context.OptionsDelegate;
        }

        if (options.plugins) {
            const key = options.plugins.join('/');
            Cherow = pluginClassCache[key];
            if (!Cherow) {
                Cherow = Parser;
                for (const plugin of options.plugins) {
                    Cherow = plugin(Cherow);
                }
                pluginClassCache[key] = Cherow;
            }

            return new Cherow(source, sourceFile).parseProgram(context, options, delegate);
        }
    }

    return new Parser(source, sourceFile).parseProgram(context, options, delegate);
}

// https://tc39.github.io/ecma262/#sec-scripts

export const parseScript = (source: string, options ?: Options) => {
    return parse(source, Context.TopLevel, options);
};

// https://tc39.github.io/ecma262/#sec-modules

export const parseModule = (source: string, options ?: Options) => {
    return parse(source, Context.Strict | Context.Module | Context.TopLevel, options);
};

export const version = '__VERSION__';
