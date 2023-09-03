import { AiModel } from '@/types/ai-models';
import { Message } from '@/types/chat';

import { countTokensAnthropic } from './anthropic/getTokenCount';
import { countTokensGoogle } from './google/getTokenCount';
import { countTokensSingularityAI } from './openai/getTokenCount';

export async function getTokenCount(
  model: AiModel,
  systemPrompt: string,
  messages: Message[],
) {
  if (model.vendor === 'SingularityAI') {
    return countTokensSingularityAI(model, systemPrompt, messages);
  } else if (model.vendor === 'Anthropic') {
    return countTokensAnthropic(model, systemPrompt, messages);
  } else if (model.vendor === 'Google') {
    return countTokensGoogle(model, systemPrompt, messages);
  }
  return { error: 'Unknown vendor' };
}
