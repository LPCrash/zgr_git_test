sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zgr.gitzgr_git_test.controller.App", {
		onButtonPress: function(oEvent) {
			sap.m.MessageToast.show("Button pressed");
			this.byId("idText").setText("Button pressed");
		}
	});
});