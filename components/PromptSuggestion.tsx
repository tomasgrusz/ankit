import { BotMessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { CopyButton } from "./ui/shadcn-io/copy-button";
import { Textarea } from "./ui/textarea";

const twoSidedPrompt = `[IMPORTANT] Format generated cards accordingly:
1. row - Question
2. row - Answer
3. row - (empty)

<INSERT YOUR PROMPT HERE>`;

const multipleChoicePrompt = `[IMPORTANT] Format generated cards accordingly:
1. row - Question
2. row - Answer choice 1 (suffix correct answer with "✓")
3. row - Answer choice 2 (suffix correct answer with "✓")
4. row - Answer choice 3 (suffix correct answer with "✓")
5. row - Answer choice 4 (suffix correct answer with "✓")
6. row - (empty)

<INSERT YOUR PROMPT HERE>`;

const tabs = [
  {
    value: "two-sided",
    label: "Two-sided",
    prompt: twoSidedPrompt,
  },
  {
    value: "multiple-choice",
    label: "Multiple-choice",
    prompt: multipleChoicePrompt,
  },
];

export default function PromptSuggestion() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BotMessageSquare />
        </EmptyMedia>
        <EmptyTitle>How to generate source content for Anki cards?</EmptyTitle>
        <EmptyDescription className="w-[600px]">
          Pick any LLM of choice, generate the material you want to learn and
          use these prompt templates to turn it into correctly formatted source
          content.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Tabs defaultValue="two-sided">
          <TabsList className="mx-auto">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="relative mt-2"
            >
              <Textarea
                className="w-[400px] h-[200px] resize-none"
                readOnly
                value={tab.prompt}
              />
              <CopyButton
                className="absolute top-2 right-2"
                content={tab.prompt}
              />
            </TabsContent>
          ))}
        </Tabs>
      </EmptyContent>
    </Empty>
  );
}
