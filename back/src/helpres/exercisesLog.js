export const reBuildTimes = (log, prevExLog = null) => (
  log.times.map((item, index) => ({
    ...item,
    prevWeight: prevExLog ? prevExLog.times[index].weight : 0,
    prevRepeat: prevExLog ? prevExLog.times[index].repeat : 0,
  }))
)