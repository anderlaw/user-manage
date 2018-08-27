<template>
  <div style="height:calc(100% - 90px);box-sizing:border-box;padding:10px;">
      <TabBox>
        <template slot="title">
          用户管理
          <span @click="newUserVisible = true" class="iconfont icon-xinzengzuyuan" style="cursor:pointer;margin-left:10px;color:#f3f3f3;font-size:20px;"></span>
        </template>
        <template slot="content">
          <el-table
            :data="userList"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="user_name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话">
            </el-table-column>
            
            <el-table-column
              prop="salary"
              label="薪水">
            </el-table-column>
            <el-table-column
              prop="register_date"
              label="注册日期">
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="updateUser(scope.row)">修改</el-button>
                <el-button type="danger" size="small" @click="deleteUser(scope.row.user_id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </TabBox>
      <!-- 新增用户对话框 -->
      <el-dialog @close="resetForm" :title="dialogTitle" width="30%" :visible.sync="newUserVisible">
        <el-form :model="newUserForm" :rules="newUserFormRules" ref="newUserForm" size="small">
          <el-form-item label="姓名" prop="user_name" label-width="80px">
            <el-input v-model="newUserForm.user_name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="居住地" label-width="80px">
            <el-input v-model="newUserForm.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone" label-width="80px">
            <el-input v-model="newUserForm.phone" auto-complete="off"></el-input>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size="small" @click="newUserVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="handleUserSure">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
import { getUserlist ,createUser,deleteUser ,updateUser} from '@/http/user'
import TabBox from '@/components/tab-box'
export default {
  components:{TabBox},
  data(){
    var checkPhone = (rule, value, callback) => {
      if (value == '' || !/^\d{5,11}$/.test(value)) {
          return callback(new Error('电话长度为 5 ~ 11 位数字'));
      }else{
        callback();
      }
    };
    return {
      userList:[],
      //create user
      dialogTitle:'新增用户',
      newUserVisible:false,
      newUserForm:{
        user_name:'',
        address:'',
        phone:'',
        salary:null,
        register_date:''
      },
      newUserFormRules:{
        user_name:[
          { required:true,message:'请输入用户名',trigger:'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        phone:[
          { validator:checkPhone,trigger:'blur' },
        ],
      },
    }
  },
  methods:{
    handleUserSure(){
      this.$refs.newUserForm.validate(valid => {
        if(valid){
          if(this.dialogTitle === '新增用户'){
            this.newUserForm.register_date = new Date().toLocaleDateString();
            createUser(this.newUserForm).then(res=>{
              this.getUserlist();
              this.newUserVisible = false;
            })
          }else{
            updateUser(this.newUserForm).then(res=>{
              this.getUserlist();
              this.newUserVisible = false;
            })
          }
        }else{
        }
      })
    },
    updateUser(row){
      this.dialogTitle = '修改用户';
      this.newUserVisible = true;
      this.newUserForm = {
        user_name:row.user_name,
        address:row.address,
        phone:row.phone,
        salary:row.salary,
        register_date:row.register_date,
        user_id:row.user_id
      };
    },
    deleteUser(id){
      //this.$confirm
      this.$confirm('确认删除?', '删除用户', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteUser(id).then(res=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getUserlist();
          })  
        })
    },
    resetForm(){
      this.$refs.newUserForm.resetFields();
    },
    getUserlist(){
      getUserlist().then(res=>{
        if(res.data.statusCode === 200){
          this.userList = res.data.data;
        }
      })
    }
  },
  mounted() {
    this.getUserlist();
  }
}
</script>

<style>

</style>
