import alterschema from 'alterschema';
import { InputData, jsonInputForTargetLanguage, quicktype } from 'quicktype-core';

export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }

  return true;
};

export const getQuickTypeJsonSchema = async (jsonString: string) => {
  const jsonInput = jsonInputForTargetLanguage('schema');

  await jsonInput.addSource({
    name: 'typeName',
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: 'schema',
  });
};

export const parseJsonToFormSchema = async (formInput: object) => {
  try {
    const formInputString = JSON.stringify(Array.isArray(formInput) ? { data: formInput } : formInput);

    const quickTypeJsonSchema = await getQuickTypeJsonSchema(formInputString);

    const formSchemaDraft6 = JSON.parse(quickTypeJsonSchema.lines.join(''));

    return await alterschema(formSchemaDraft6, 'draft6', 'draft7');
  } catch (e) {
    console.error(e);
    return null;
  }
};
