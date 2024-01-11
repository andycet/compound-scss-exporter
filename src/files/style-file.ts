import { FileHelper } from "@supernovaio/export-helpers";
import {
  OutputTextFile,
  Token,
  TokenGroup,
  TokenType,
} from "@supernovaio/sdk-exporters";
import { exportConfiguration } from "..";
import { convertedToken } from "../content/token";

export function styleOutputFile(
  type: TokenType,
  tokens: Array<Token>,
  tokenGroups: Array<TokenGroup>
): OutputTextFile | null {
  // Type
  console.log(type);

  // Filter tokens by top level type
  const tokensOfType = tokens.filter((token) => token.tokenType === type);

  // Filter out files where there are no tokens, if enabled
  if (!exportConfiguration.generateEmptyFiles && tokensOfType.length === 0) {
    return null;
  }

  // Convert all tokens to CSS variables
  const mappedTokens = new Map(tokens.map((token) => [token.id, token]));
  const scssVariables = tokensOfType
    .map((token) => convertedToken(token, mappedTokens, tokenGroups))
    .join("\n");

  // Create file content
  let contentVariables = `\n${scssVariables}\n`;

  if (exportConfiguration.showGeneratedFileDisclaimer) {
    // Add disclaimer to every file if enabled
    contentVariables = `\n/* ${exportConfiguration.disclaimer} */\n${contentVariables}`;
  }

  let contentImports = addImport(type);

  const content = contentImports + contentVariables;

  // Retrieve content as file which content will be directly written to the output
  return FileHelper.createTextFile({
    relativePath: exportConfiguration.baseStyleFilePath,
    fileName: exportConfiguration.styleFileNames[type],
    content: content,
  });
}

function addImport(t: string) {
  switch (t) {
    case "Typography":
      return `@use "../font-sizes/" as *;\n@use "../line-heights/" as *;`;
    case "Border":
      return `@use "../border-width/" as *;\n@use "../colors/" as *;`;
    default:
      return `/* No import needed */`;
  }
}
