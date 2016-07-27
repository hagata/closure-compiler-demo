This uses the July 13, 2016 (v20160713) version of closure-compiler compiler.jar

# Install closure-library sub-module.
```
 git submodule init
 git submodule update
```

# Compile JS — with java jar command
Use the following `java -jar` command from the project root to compile the project js to `dist/js/main.js`
```
java -jar closure-compiler/compiler.jar --js "closure-library/closure/goog/base.js" --js "js/modules" --js "js/main.js" --js_output_file "dist/js/main.js"  --compilation_level "ADVANCED_OPTIMIZATIONS" --dependency_mode "STRICT" --entry_point "js/main.js" --language_in "ECMASCRIPT6" --language_out "ECMASCRIPT5_STRICT" --output_manifest "manifest.MNF"
```

This jar command passes in the files for compilation with the `--js` flag, in order. Then it sets the compilation level and dependency mode. Dependency mode `STRICT` sets the compiler to only compile src files included by the `--entry_point` file.

By default, the closure compiler expects ES6 in and ES3 out, but we're setting ES6 explicitly and setting language out to `ECMASCRIPT5_STRICT`; which is ES5 with compliance for `'use strict'`

## Optional flags
The following flags can be changed, or omitted.
- `--compilation_level "ADVANCED_OPTIMIZATION"` sub with: `SIMPLE_OPTIMIZATION`, `WHITESPACE_ONLY`
- `--dependency_mode "STRICT"` sub with: `LOOSE`, or omit
- `--language_in "ECMASCRIPT6"` (default)
- `--language_out "ECMASCRIPT5_STRICT"`, sub with, `ECMASCRIPT5`, `ECMASCRIPT3 (default)`
- `--output_manifest "manifest.MNF"` optional

For more info on available flags:
```
  java -jar closure-compiler/compiler.jar --help
```