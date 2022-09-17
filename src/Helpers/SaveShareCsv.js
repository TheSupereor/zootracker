import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const saveFile = async (data) => {
  
    let directoryUri = FileSystem.documentDirectory;
    
    let fileUri = directoryUri + "ZootrackCSV.csv";
  
    await FileSystem.writeAsStringAsync(fileUri, data, { encoding: FileSystem.EncodingType.UTF8 });
  
    return fileUri;
   
};

const shareFile = async (fileUri) => {
  const canShare = await Sharing.isAvailableAsync();

  // Check if permission granted
  if (canShare) {
    try{
      const res = await Sharing.shareAsync(fileUri);
      console.log('shareAsync', res);
      return true;
    } catch {
      return false;
    }
  } else {
    alert("Você precisa dar permissão para Compartilhar.")
  }
};

export {
   saveFile,
   shareFile 
  };