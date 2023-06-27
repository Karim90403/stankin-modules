<script setup lang="ts">
import axios from 'axios';

const router = useRouter();
const isProfessor = ref<boolean>(false)
const activeFlag = ref<boolean>(false)
const inputValue = ref<string>("")

const watchProfessor = ():void => {isProfessor.value = true}
const watchGroup = ():void => {isProfessor.value = false}
const clearValue = ():void => {inputValue.value = ""}
const groupList = ref<Array<string>>(['...'])
const lecturersList = ref<Array<string>>(['...'])

const watchData = ():void => {
	if(inputValue.value.length > 0){
		localStorage.setItem("isLecturer", JSON.stringify(isProfessor.value))
		if(isProfessor.value){
			localStorage.setItem("lecturer", inputValue.value)
		}
		else{
			localStorage.setItem("group", inputValue.value)
		}
		router.push('/')
	}
}

const changeInput = (newValue:string):void => {
    activeFlag.value = true
    inputValue.value = newValue
}

const blureInput = ():void => {
    const chengeFlag = ():void => {activeFlag.value = false}
    setTimeout(chengeFlag,100)
}

onMounted(async () => {
    try {
        let resGroups = await axios.get("/api/getGroups")
		groupList.value = resGroups.data
    }catch (error) {
        console.log(error);
    }
})

onMounted(async () => {
    try {
        let resLectures = await axios.get("/api/getLecturers")
        lecturersList.value = resLectures.data
    }catch (error) {
        console.log(error);
    }
})

const filtredList = computed(():Array<string> =>{
    if(isProfessor.value){
        return lecturersList.value.filter(name => {
            return name.toUpperCase().indexOf(inputValue.value.toUpperCase()) !== -1
        })
    }
    else{
        return groupList.value.filter(name => {
            return name.toUpperCase().indexOf(inputValue.value.toUpperCase()) !== -1
        })
    }
})
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <div class="w-4/5 shadow-2xl py-7 rounded bg-white sm:w-1/2">
            <span class="text-xl text-center block w-full text-black sm:text-2xl">Узнать расписание</span>
            <div class="flex justify-around my-10">
                <span class="text-lg cursor-pointer transition duration-300 sm:text-xl" :class="!isProfessor ? 'text-cyan-600 border-b border-cyan-600' : 'text-slate-400 hover:border-b hover:border-slate-400'" @click="watchGroup()">Группы</span>
                <span class="text-lg cursor-pointer transition duration-300 sm:text-xl" :class="isProfessor ? 'text-cyan-600 border-b border-cyan-600' : 'text-slate-400 hover:border-b hover:border-slate-400'" @click="watchProfessor()">Преподавателя</span>
            </div>
            <div class="flex justify-center mt-10">
                <div class="flex w-5/6 items-center border-b border-slate-500 py-2 sm:w-2/3">
                    <input class="appearance-none text-xs bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none sm:text-lg" v-model="inputValue" @focus="activeFlag = true" @blur="blureInput()" type="text" :placeholder="isProfessor ? 'Введите ФИО': 'Введите номер'" aria-label="Full name">
                    <button class="flex-shrink-0 bg-slate-500 text-xs shadow-md drop-shadow-2xl hover:bg-slate-700 border-slate-500 hover:border-slate-700 border-2 text-white py-1 px-2 rounded sm:text-sm sm:border-4" type="button" @click="clearValue">
                    Стереть
                    </button>
                </div>
            </div>
            <div class="flex justify-center absolute w-screen z-10 right-0">
                <div class="w-4/5 flex justify-center sm:w-1/2">
                    <ul class="px-2 py-2 w-5/6 overflow-x-scroll shadow-xl rounded-t-none text-base bg-slate-100 transition-all duration-300 ease-in-out h-auto max-h-60 rounded sm:max-h-72 sm:w-2/3 sm:text-sm" v-if="filtredList.length > 0" :class="activeFlag ? '' : 'h-0 py-0 overflow-hidden'">
                        <li v-for="(name) in filtredList" :key="name" @click="changeInput(name)"
                            class="px-2 py-1 cursor-pointer w-full sm:text-2xl lg:text-xl">
                            {{ name }}
                        </li>
                    </ul>
                </div>
                
            </div>
            <div class="flex justify-center mb-3 mt-8">
                <span class="group relative text-center shadow-xl drop-shadow-2xl cursor-pointer mt-5 py-2 w-2/3 border border-slate-500 text-xs font-medium rounded-md text-white bg-slate-500 hover:bg-slate-600 focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 lg:text-sm sm:w-1/2" @click="watchData()">
                    Посмотреть расписание
                </span>
             </div>
        </div>
    </div>
</template>