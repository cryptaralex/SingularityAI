import { Conversation, Message } from './chat';
import { FolderInterface } from './folder';
import { Prompt } from './prompt';
import { SystemPrompt } from './system-prompt';

export type SupportedExportFormats = SingularityExportFormatV1;
export type LatestExportFormat = SingularityExportFormatV1;

export interface SingularityExportFormatV1 {
  app: 'Singularity';
  version: 1;
  conversations: Conversation[];
  folders: FolderInterface[];
  message_templates: Prompt[];
  system_prompts: SystemPrompt[];
}
