import { ArtifactManager } from "../github/artifact";
import { GitHubClient } from "../github/types";
import { StatusChecker } from "../status";
import { ReportFile } from "../types";

const sites: Array<[string, string]> = [

]

for (const [site, url] of sites) {
  test(`Test obtaining metrics from ${site}`, async () => {
    const statusChecker = new StatusChecker(site, url, console);
    await expect(statusChecker.verifyEndpoint()).resolves.toBe(true);
  })
}

test("Write to doc", async () => {
  const siteResult: ReportFile["site"] = [];

  for (const [site, url] of sites) {
    const statusChecker = new StatusChecker(site, url, console);
    siteResult.push({ name: site, status: [{ timestamp: new Date().getTime(), result: (await statusChecker.verifyEndpoint()) }] });
  }
  const am = new ArtifactManager(null as unknown as GitHubClient, console, "test");
  await am.generateArtifact({ incidents: [], site: siteResult });
})
