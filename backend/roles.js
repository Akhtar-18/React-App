const AccessControl = require("accesscontrol");
const ac = new AccessControl();

//"basic", "supervisor", "admin"
//'user','admin','superadmin'

exports.roles = (function() {
    ac.grant("user")
    .readOwn("profile")
    .updateOwn("profile")

ac.grant("admin")
 .extend("user")
 .readAny("profile")

ac.grant("superadmin")
 .extend("user")
 .extend("admin")
 .updateAny("profile")
 .deleteAny("profile")


return ac;
})();