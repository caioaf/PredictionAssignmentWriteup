webpackJsonp([51],{"3cFv":function(module,exports,e){var t=e("rPIG");"string"==typeof t&&(t=[[module.i,t,""]]);var n,r={};r.transform=void 0;var i=e("MTIv")(t,r);t.locals&&(module.exports=t.locals)},TKWq:function(module,exports,e){var t=e("jncx");"string"==typeof t&&(t=[[module.i,t,""]]);var n,r={};r.transform=void 0;var i=e("MTIv")(t,r);t.locals&&(module.exports=t.locals)},XYOh:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var t=e("U7vG"),n=_interopRequireWildcard(t),r=e("p2kh"),i=_interopRequireDefault(r),s=e("41m7"),a=_interopRequireDefault(s),o=e("cSfU"),u=_interopRequireDefault(o),l=e("epGi"),c=_interopRequireDefault(l),d=e("zIFn"),p=_interopRequireDefault(d),f=e("UJwr"),m=_interopRequireDefault(f),g=e("H1Ke"),v=_interopRequireDefault(g),S=e("Dlq9"),y=_interopRequireDefault(S),q=e("hgxZ"),P=_interopRequireDefault(q),h=e("9aUp"),R=e("mE/L"),I=_interopRequireDefault(R),D=a.default.compose(p.default.createTrackedContainer(function(){return{namespace:{page:"peer_review_instructions"}}}),(0,i.default)(["PeerAssignmentStore","PeerPermissionsAndProgressesStore","PeerViewSubmissionStore"],function(e,t){var n=e.PeerAssignmentStore,r=e.PeerPermissionsAndProgressesStore,i=e.PeerViewSubmissionStore,s=n.getState().assignment;return{hasLoaded:"loaded"===n.getState().loadState&&"loaded"===r.getState().loadState,instructions:s&&s.instructions,loadedPeerViewSubmissionId:i.getState().submissionId,isSubmitted:r.getState().isSubmitted,latestSubmissionId:r.getState().latestSubmissionId}}),(0,c.default)(function(e){return e.hasLoaded},n.createElement(I.default,{className:"rc-PeerItemInstructions"})),(0,y.default)(function(e,t){var n=t.itemMetadata,r=t.isSubmitted,i=t.latestSubmissionId,s=t.loadedPeerViewSubmissionId;if(r&&i){s!==i&&e.executeAction(h.loadSubmission,{userId:P.default.get().id,courseId:n.get("course").get("id"),itemId:n.get("id"),submissionId:i})}}))(u.default);module.exports=D},cSfU:function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),n=_interopRequireDefault(t),r=e("zwoO"),i=_interopRequireDefault(r),s=e("Pf15"),a=_interopRequireDefault(s),o,u,l=e("U7vG"),c=_interopRequireWildcard(l),d=e("RmY2"),p=_interopRequireDefault(d),f=e("hFTC"),m=_interopRequireDefault(f);e("3cFv");var g=(u=o=function(e){function AssignmentInstructions(){return(0,n.default)(this,AssignmentInstructions),(0,i.default)(this,e.apply(this,arguments))}return(0,a.default)(AssignmentInstructions,e),AssignmentInstructions.prototype.render=function render(){var e=this.props.instructions;if(null==e)return null;return c.createElement("div",{className:"rc-AssignmentInstructions"},c.createElement("div",{className:"introduction"},c.createElement(p.default,{content:e.introduction,assumeStringIsHtml:!0})),e.sections&&e.sections.map(function(e){return c.createElement(m.default,{title:e.title,key:e.title},c.createElement(p.default,{content:e.content,assumeStringIsHtml:!0}))}))},AssignmentInstructions}(c.Component),o.propTypes={instructions:c.PropTypes.shape({introduction:c.PropTypes.any.isRequired,sections:c.PropTypes.arrayOf(c.PropTypes.shape({content:c.PropTypes.object.isRequired,title:c.PropTypes.string.isRequired}))})},u);module.exports=g},hFTC:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function MoreOrLess(e,t){var n=e.ariaProps;return p.default.createElement("span",{className:"rc-MoreOrLess body-2-text color-hint-text"},e.more?p.default.createElement("button",(0,u.default)({onClick:e.onClick,className:"nostyle button-link"},n),(0,v.default)("more")," ",p.default.createElement(m.default,{name:"chevron-down",className:"toggle-arrow"})):p.default.createElement("button",(0,u.default)({onClick:e.onClick,className:"nostyle button-link"},n),(0,v.default)("less")," ",p.default.createElement(m.default,{name:"chevron-up",className:"toggle-arrow"})))}var t=e("Zrlr"),n=_interopRequireDefault(t),r=e("zwoO"),i=_interopRequireDefault(r),s=e("Pf15"),a=_interopRequireDefault(s),o=e("Dd8w"),u=_interopRequireDefault(o),l,c,d=e("U7vG"),p=_interopRequireDefault(d),f=e("SfBx"),m=_interopRequireDefault(f);e("TKWq");var g=e("/IK8"),v=_interopRequireDefault(g);MoreOrLess.propTypes={more:p.default.PropTypes.bool,onClick:p.default.PropTypes.func,ariaProps:p.default.PropTypes.shape({"aria-controls":p.default.PropTypes.string,"aria-expanded":p.default.PropTypes.bool})};var S=(c=l=function(e){function AssignmentInstructionSection(){var t,r,s;(0,n.default)(this,AssignmentInstructionSection);for(var a=arguments.length,o=Array(a),u=0;u<a;u++)o[u]=arguments[u];return t=r=(0,i.default)(this,e.call.apply(e,[this].concat(o))),r.state={expanded:!0},r.toggleExpand=function(){r.setState({expanded:!r.state.expanded})},s=t,(0,i.default)(r,s)}return(0,a.default)(AssignmentInstructionSection,e),AssignmentInstructionSection.prototype.render=function render(){var e="instructions-container-"+(new Date).getTime(),t={"aria-controls":e,"aria-expanded":this.state.expanded};return p.default.createElement("div",{className:"rc-AssignmentInstructionSection"},p.default.createElement("div",{className:"title-container bgcolor-primary-light"},p.default.createElement("span",{className:"body-2-text"},this.props.title),p.default.createElement(MoreOrLess,{more:!this.state.expanded,onClick:this.toggleExpand,ariaProps:t})),this.state.expanded&&p.default.createElement("div",{className:"instructions-content-container",id:e,key:this.state.expanded},this.props.children))},AssignmentInstructionSection}(p.default.Component),l.propTypes={title:p.default.PropTypes.string,children:p.default.PropTypes.node},c);module.exports=S},jncx:function(module,exports){},rPIG:function(module,exports){}});
//# sourceMappingURL=51.5ffbe42a6b4931f51a9c.js.map