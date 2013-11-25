/////////////////////////////////////////////////////////////////////
// closure environment persists, no matter how the function is called
/////////////////////////////////////////////////////////////////////

// works as demonstrated above
captainsLog("Captain's log, additional entry. Since our mission was routine, we had beamed down to the planet without suspicion.");

captainUtils.captainsLog = captainsLog;

// works because it access the same closure environment
captainUtils.captainsLog("Captain's log, Stardate 1513.1. Our position, orbiting planet M-113.");

// works as well!
captainsLog.call(null, "Captain's log, Stardate 1513.4. One crewman, member of the landing party, dead by violence.");
