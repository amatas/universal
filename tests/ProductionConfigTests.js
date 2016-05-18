/**
GPII Production Config tests

Requirements:
* an internet connection
* a preferences server running at `http://preferences.gpii.net` containing at least the MikelVargas
NP set

---

Copyright 2015 Raising the Floor - International

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

The research leading to these results has received funding from the European Union's
Seventh Framework Programme (FP7/2007-2013) under grant agreement no. 289016.

You may obtain a copy of the License at
https://github.com/GPII/universal/blob/master/LICENSE.txt
*/

/*global require*/

"use strict";
var fluid = require("universal"),
    path = require("path"),
    gpii = fluid.registerNamespace("gpii");

require("./ProductionTestDefs");

gpii.loadTestingSupport();

fluid.registerNamespace("gpii.tests.productionConfigTesting");

/*
 * ================================
 * production.with.logging
 * ================================
 */
module.exports = gpii.test.bootstrap({
    testDefs:  "gpii.tests.productionTestDefs.standard",
    configName: "production.with.logging",
    configPath: path.resolve(__dirname, "../gpii/configs")
}, ["gpii.test.integration.deviceReporterAware.linux", "gpii.test.integration.testCaseHolder.linux"],
    module, require, __dirname);

/*
 * ================================
 * Testing of cloudBased.production
 * ================================
 */

module.exports = gpii.test.cloudBased.bootstrap(gpii.tests.productionTestDefs.cloudBased, __dirname);
