<template>
  <div class="flex justify-center items-center h-screen flex-col">
    <el-button @click="copyEvt" type="primary">点击触发深拷贝，结果请看控制台</el-button>

    <el-button v-show="flag" @click="changeCopyEvt" type="primary" mt-10>改变深拷贝出来的数据，结果请看控制台</el-button>
  </div>
</template>

<script setup name="deepCopy" lang="ts">
  import { deepCopy } from '/@/utils/common';
  type Subject = {
    name: string;
  };
  type Student = {
    name: string;
    grade: '小学生' | '初中生' | '高中生' | '大学生';
    age: number;
    addAage: () => void;
    subject: Subject[];
  };
  const flag = ref<boolean>(false);
  const student = reactive<Student>({
    name: '张三',
    grade: '小学生',
    age: 10,
    addAage: function () {
      this.age++;
    },
    subject: [{ name: '数学' }],
  });

  let student2 = reactive<any>({});

  const copyEvt = () => {
    student2 = deepCopy(student);
    flag.value = true;
    console.log('深拷贝出来的数据》》》', student2);
  };

  const changeCopyEvt = () => {
    student2.age = 18;
    student2.grade = '高中生';
    student2.addAage();
    student2.subject.push({
      name: '语文',
    });

    console.log('改变深拷贝出来的数据》》》', student2);
    console.log('原数据的数据》》》', student);
  };
</script>

<style lang="less" scoped></style>
