import { AiModel } from '@/types/ai-models';
import { Message } from '@/types/chat';

import { streamAnthropic } from './anthropic/getStream';
import { streamPaLM2 } from './google/getStream';
import { streamSingularityAI } from './openai/getStream';

export async function getStream(
  model: AiModel,
  systemPrompt: string,
  temperature: number,
  apiKey: string | undefined,
  messages: Message[],
  tokenCount: number,
) {
  if (model.vendor === 'SingularityAI') {
    return streamSingularityAI(
      model,
      systemPrompt,
      temperature,
      apiKey,
      messages,
      tokenCount,
    );
  } else if (model.vendor === 'Anthropic') {
    return streamAnthropic(
      model,
      systemPrompt,
      temperature,
      apiKey,
      messages,
      tokenCount,
    );
  } else if (model.vendor === 'Google') {
    return streamPaLM2(
      model,
      systemPrompt,
      temperature,
      apiKey,
      messages,
      tokenCount,
    );
  }
  return { error: 'Unknown vendor' };
}
