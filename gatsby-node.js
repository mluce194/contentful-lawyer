
exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/fr/', redirectInBrowser: true, isPermanent: true })
 
}
