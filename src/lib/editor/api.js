import {supabase} from '../db';

export const fetchList = async () => {
	let {data,error} = await supabase.from('json_editor').select('titel,info,schema,option,startval,id').order('group', {ascending: true}).order('id', {ascending: true})
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};
export const fetchDetail = async (id) => {
	let { data, error } = await supabase.from('json_editor').select("*").eq('id', id).single();
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};
// group,titel,info,dataobj,link,hidden,id,schema,config,created_at
