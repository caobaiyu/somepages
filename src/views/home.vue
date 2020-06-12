<template>
	<p>home</p>
</template>

<script>

export default {
	data() {
		return {}
	}
};
</script>

<style lang="scss" scoped>
.lgouttl {
	float: right;
	@include txtgl;
	margin-right: 1em;
	cursor: pointer;
}
.lgouttl:hover {
	@include txtglhv;
}
.home_container {
	height: 100%;
}
.el-header {
	background-color: #000066;
	line-height: 60px;
}
.el-aside {
	background-color: #545c64;
}
.el-main {
	padding: 0;
}
.zdfg {
	width: 100%;
	/**height: 50px;*/
	line-height: 50px;
	padding-left: 20px;
	box-sizing: border-box;
	/** margin-left: 20px; */
	background: #d3959b; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #bfe6ba, #d3959b); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #bfe6ba, #d3959b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.btnn,
.btnnz {
	cursor: pointer;
	float: left;
	opacity: 0.5;
}
.btnn {
	@include btnn($mg: 0);
	z-index: 2;
}
.btnn::before {
	@include btnnbf(-30deg);
}
.btnnz {
	@include btnn($mg: 0);
	z-index: 2;
}
.btnnz::before {
	@include btnnbf;
}

.navtbdv {
	float: left;
	margin-left: 2em;
	@include tabnavbsdv;
	span {
		cursor: pointer;
		@include tabnavbstx;
		border: 0;
	}
	.activb {
		@include tabnavbstxbfact;
		&::before {
			@include tabnavbstxbfactbf;
		}
	}
}
.ltyu span::before {
	@include xztabtxbfys(1);
}

.rgyu span::before {
	@include xztabtxbfys(3);
}
</style>
