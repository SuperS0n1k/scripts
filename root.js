document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.educator = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.admin = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.scratcher = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.social = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.educator_invitee = true;
let perms = document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions;
console.log(perms);
