import { execSync } from 'child_process';
import path from 'path';

const projectDir = '/vercel/share/v0-project';

try {
  // Show current branch
  const currentBranch = execSync('git branch --show-current', { 
    cwd: projectDir,
    encoding: 'utf-8'
  }).trim();
  
  console.log('[v0] Current branch:', currentBranch);
  
  // Check if branch exists locally
  const branches = execSync('git branch -a', { 
    cwd: projectDir,
    encoding: 'utf-8'
  });
  
  console.log('[v0] Available branches:', branches);
  
  // Checkout to feat/candidate-votes-grid
  execSync('git checkout feat/candidate-votes-grid', { 
    cwd: projectDir,
    encoding: 'utf-8'
  });
  
  const newBranch = execSync('git branch --show-current', { 
    cwd: projectDir,
    encoding: 'utf-8'
  }).trim();
  
  console.log('[v0] Successfully switched to branch:', newBranch);
  process.exit(0);
} catch (error) {
  console.error('[v0] Error:', error.message);
  process.exit(1);
}
