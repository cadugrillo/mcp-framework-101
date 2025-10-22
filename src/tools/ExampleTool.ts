import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ExampleInput {
  message: string;
  id: string;
}

const ExampleSchema = z.object({
  message: z.string().describe("Message to process"),
  id: z.string().min(1, "id cannot be empty.").describe("The Message ID."),
});

class ExampleTool extends MCPTool<ExampleInput> {
  name = "example_tool";
  description = "An example tool that processes messages with IDs.";

  schema = ExampleSchema;

  async execute(input: ExampleInput) {
    return `Processed: ${input.message}, ID: ${input.id}`;
  }
}

export default ExampleTool;