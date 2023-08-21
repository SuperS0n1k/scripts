document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.educator = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.admin = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.scratcher = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.social = true;
document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions.educator_invitee = true;
let perms = document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().permissions;
console.log(perms);
fetch('https://raw.githubusercontent.com/LoganAbel/ScratchMath/main/Math.js').then(r=>r.text()).then(t=>eval(t))
fetch('https://raw.githubusercontent.com/SuperS0n1k/scratch3-extensions/main/ScratchJSnomods.js').then(r=>r.text()).then(t=>eval(t))
