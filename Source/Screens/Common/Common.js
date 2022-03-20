
//const ApiKey = 'k_m73z3hkh';
//const ApiKey = 'k_si9mz95t';
const ApiKey = 'k_qargurwi';

const FetchData = async (type, query) => {
    let fullQuery='https://imdb-api.com/en/API/'+type+'/'+ApiKey;
    if(query!=undefined)
      fullQuery+=query;
    try{
      const result = await (await fetch(fullQuery)).json();
      if(result.errorMessage=="" || result.errorMessage==null)
        return result;
      return null;
    }
    catch(error){
      console.error(error);
      return null;
    }
}

export {FetchData};
