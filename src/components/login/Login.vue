<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
<!--                <el-button @click="cancel">取消</el-button>-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    userName: undefined,
                    password: undefined
                }
            }
        },
        created() {
        },
        methods: {
            onSubmit() {
                // 执行登录方法
                this.postRequest('/login', this.form).then(res => {
                    console.log('登录接口请求成功')
                    }
                )
            },
            cancel() {

            }
        }

    }
</script>

<style scoped>

</style>