export interface AiModel {
  id: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  requestLimit: number;
  vendor: 'OpenAI' | 'Anthropic' | 'Google' | 'SingularityAI';
}

export interface PossibleAiModelsInterface {
  [modelId: string]: AiModel;
}

export const PossibleAiModels: PossibleAiModelsInterface = {
  'gpt-3.5-turbo': {
    id: 'Ophelia',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
  },
  'gpt-35-az': {
    id: 'gpt-35-az',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
  },
  'gpt-4': {
    id: 'gpt-4',
    maxLength: 24000,
    tokenLimit: 8000,
    requestLimit: 6000,
    vendor: 'OpenAI',
  },
  'gpt-4-32k': {
    id: 'gpt-4-32k',
    maxLength: 96000,
    tokenLimit: 32000,
    requestLimit: 30000,
    vendor: 'OpenAI',
  },
  'gpt-35-turbo': {
    id: String(process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_ID),
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
  },
  'claude-instant-1': {
    id: 'claude-instant-1',
    maxLength: 400000,
    tokenLimit: 100000,
    requestLimit: 98000,
    vendor: 'Anthropic',
  },
  'claude-2': {
    id: 'claude-2',
    maxLength: 400000,
    tokenLimit: 100000,
    requestLimit: 98000,
    vendor: 'Anthropic',
  },
  '/Users/alexg/llama.cpp/models/airoboros-l2-70b-2.1.Q4_K_M.gguf': {
    id: 'Ophelia',
    maxLength: 12000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'OpenAI',
  },
  bard: {
    id: 'bard',
    maxLength: 12000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Google',
  },
};
