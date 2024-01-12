 import AsyncStorage from "@react-native-async-storage/async-storage";


 import { GROUP_COLLATION } from "@storage/storageConfig";


 export async function setGroupCreate(newGroup: string){
     try{
        const dataAll = await getGroupAll();

        if(!dataAll) return await AsyncStorage.setItem(GROUP_COLLATION, newGroup);

        const data = JSON.stringify([...dataAll, newGroup]);

        return await AsyncStorage.setItem(GROUP_COLLATION, data);

     }catch(e){
         throw e;
     }
 };

 export async function getGroupAll(){
     try{
         const storage = await AsyncStorage.getItem(GROUP_COLLATION);

         return JSON.parse(storage ?? '[]');
     }catch(e){
         throw e;
     }
  };