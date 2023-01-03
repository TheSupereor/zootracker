import { AdvSearch } from "./ApiTypes";
import { supabase } from "./supabaseLib";
import { decode } from 'base64-arraybuffer';

const getCampos = async () => {
	const {data, error} = await supabase.from('campos').select();
	if (error) console.log('Erro getCampos:', error);
	return data;
}

const AddCampo = async (CampoData) => {
	const { data, error } = await supabase
  .from('campos')
  .insert([CampoData]);
	if (error) console.log('Erro AddCampo:', error);
	return data;
}

const getColetas = async (id: number) => {
	const {data, error} = await supabase.from('coletas').select().eq('campo_id', id);
	if (error) console.log('Erro getColetas:', error);
	return data;
}

const AddColeta = async (ColetaData) => {
	const { data, error } = await supabase
  .from('coletas')
  .insert([ColetaData]);
	if (error) console.log('Erro AddColeta:', error);
	return data;
}

const getAnimais = async () => {
	const { data, error } = await supabase.from('animais').select();
	if (error) console.log('Erro getAnimais:', error);
	return data;
}

const getAnimaisFiltered = async (filter: { name: string, order: string, foreignTable: boolean, foreignTableName?: string }) => {
	const { data, error } = filter.foreignTable 
		? await supabase.from('animais').select().order(filter.order, { foreignTable: filter.foreignTableName })
		: await supabase.from('animais').select().order(filter.order);
	if (error) console.log('Erro getAnimaisFiltered:', error);
	return data;
}

const getAnimalById = async (id: number) => {
	const { data, error } = await supabase.from('animais').select().eq('id', id);
	if (error) console.log('Erro getAnimailById:', error);
	return data;
}

const getAnimal2Byid = async (id: number) => {
	const { data, error } = await supabase.from('animais2').select().eq('animID', id);
	if (error) console.log('Erro getAnimal2Byid:', error);
	return data;
}

const getAnimalByName = async (name: string) => {
	const { data, error } = await supabase.from('animais').select().eq('cienName', name);
	if (error) console.log('Erro getAnimailByName:', error);
	return data;
}

const getAnimal2ByName = async (name: string) => {
	const { data, error } = await supabase.from('animais2').select().eq('cienName', name);
	if (error) console.log('Erro getAnimal2ByName:', error);
	return data;
}

const getDadosAnimaisByid = async (id: number) => {
	const { data, error } = await supabase.from('dadosAnimais').select().eq('animal_id', id);
	if (error) alert(`Erro getDadosAnimaisByid: ${error}`);
	return data;
}

const advancedSearch = async (formData: AdvSearch) => {
	let o = Object.fromEntries(Object.entries(formData).filter(([_, v]) => v != null));
	let keys = Object.keys(o);

	const { data, error } = await supabase
		.from('books')
		.select();
	if(error) console.log(error);

	let filteredList = data;

	// certamente algo que eu não me orgulho de fazer dessa forma, mas não faço ideia de como fazer melhor no momento
	if(keys.includes('medicoesPosteriorConjunto')){
		filteredList?.filter( item => item.medicoesPosteriorConjunto == o.medicoesPosteriorConjunto);
	};

	if(keys.includes('medicoesPosteriorAlmofada')){
		filteredList?.filter( item => item.medicoesPosteriorAlmofada == o.medicoesPosteriorAlmofada);
	};

	if(keys.includes('medicoesPosteriorDigito')){
		filteredList?.filter( item => item.medicoesPosteriorDigito == o.medicoesPosteriorDigito);
	};

	if(keys.includes('medicoesAnteriorConjunto')){
		filteredList?.filter( item => item.medicoesAnteriorConjunto == o.medicoesAnteriorConjunto);
	};

	if(keys.includes('medicoesAnteriorAlmofada')){
		filteredList?.filter( item => item.medicoesAnteriorAlmofada == o.medicoesAnteriorAlmofada);
	};

	if(keys.includes('medicoesAnteriorDigito')){
		filteredList?.filter( item => item.medicoesAnteriorDigito == o.medicoesAnteriorDigito);
	};

	if(keys.includes('medicoesAnteriorDigito')){
		filteredList?.filter( item => item.medicoesAnteriorDigito == o.medicoesAnteriorDigito);
	};

	if(keys.includes('garra')){
		filteredList?.filter( item => item.garra == o.garra);
	};

	if(keys.includes('palma')){
		filteredList?.filter( item => item.palma == o.palma);
	};

	if(keys.includes('numDigitos')){
		filteredList?.filter( item => item.numDigitos == o.numDigitos);
	};

	if(keys.includes('digitoLigadoPalma')){
		filteredList?.filter( item => item.digitoLigadoPalma == o.digitoLigadoPalma);
	};

	if(keys.includes('digitos')){
		filteredList?.filter( item => item.digitos.toLowerCase() == o.digitos.toLowerCase());
	};

	if(keys.includes('estado')){
		filteredList?.filter( item => item.estado.toLowerCase() == o.estado.toLowerCase());
	};

	if(keys.includes('bioma')){
		filteredList?.filter( item => item.bioma.toLowerCase() == o.bioma.toLowerCase());
	};

	if(keys.includes('ordem')){
		filteredList?.filter( item => item.ordem.toLowerCase() == o.ordem.toLowerCase());
	};

	return filteredList;
}

const uploadImageCampos = async (path, file) => {
	const { data, error } = await supabase.storage
		.from('zootracker')
		.upload(`campos/${path}`, file, {
			cacheControl: '3600',
			upsert: false,
	  	contentType: "image/webp",
		});

	if (error) alert(`Erro uploadImageCampos: ${error}`);
	return data;
}

const uploadImageColetas = async (path, file) => {
	const { data, error } = await supabase.storage
		.from('zootracker')
		.upload(`coletas/${path}`, file, {
			cacheControl: '3600',
			upsert: false,
	  	contentType: "image/webp",
		});

	if (error) alert(`Erro uploadImageColetas: ${error}`);
	return data;
}

const getUrlToImage = async (path:string) => {
	const { data, error } = await supabase.storage
		.from('zootracker')
		.getPublicUrl(path);
	
	if (error) alert(`Erro getUrlToImage: ${error}`);
	return data;
};

const uploadImageByBase64 = async (name, file) => {
	const { data, error } = await supabase.storage
		.from('zootracker')
		.upload(name, decode('base64FileData'), {
			contentType: 'image/png',
		})

	if (error) alert(`Erro uploadImage: ${error}`);
	return data;
}

const exportColetasAsCSV = async ( IDs: number[] ) => {
	const {data, error} = await supabase
		.from('coletas')
		.select()
		.in('id', IDs)
		.csv();

	if (error) console.log('Erro exportColetasAsCSV:', error);
	return data;
}

const exportCamposAsCSV = async ( IDs: number[] ) => {
	const {data, error} = await supabase
		.from('campos')
		.select(`
			*,
			coletas(*)
		`)
		.in('id', IDs)
		.csv();

	if (error) console.log('Erro exportCamposAsCSV:', error);
	return data;
}

export {
	//inserir funções async da requisição
	getCampos,
	getColetas,
	getAnimais,
	getAnimaisFiltered,
	getAnimalById,
	getAnimal2Byid,
	getAnimalByName,
	getAnimal2ByName,
	advancedSearch, 
	getDadosAnimaisByid,
	getUrlToImage,

	AddCampo,
	AddColeta,
	uploadImageCampos,
	uploadImageColetas,
	uploadImageByBase64,

	exportCamposAsCSV,
	exportColetasAsCSV,
}
