import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { experimental_createMCPClient, type Tool } from "ai";

export async function remoteTools(): Promise<Record<string, Tool>> {
  try {
    const httpTransport = new StreamableHTTPClientTransport(
      new URL("http://localhost:8080/mcp")
    );
    const client = await experimental_createMCPClient({
      transport: httpTransport,
    });
    return client.tools();
  } catch (error) {
    console.log(error);
    return {};
  }
}
