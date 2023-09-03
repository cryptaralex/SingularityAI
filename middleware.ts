import { withAuth } from 'next-auth/middleware';

import { dockerEnvVarFix } from './utils/app/docker/envFix';

const getSecret = () => {
  return dockerEnvVarFix(process.env.NEXTAUTH_SECRET);
};

const getEmailPatterns = () => {
  const patternsString = dockerEnvVarFix(process.env.NEXTAUTH_EMAIL_PATTERNS);
  return patternsString ? patternsString.split(',') : [];
};

export default withAuth({
  callbacks: {
    async authorized({ token }) {
      if (!token?.picture) {
        return false;
      } else {
        console.log(token);

        let result = token.picture.match(/avatars\/(\d+)/);
        if (result !== null && result.length >= 2) {
            const id = result[1]; // The first group in the regex is the ID
            const authorizedIds = dockerEnvVarFix(process.env.AUTHORIZED_DISCORD_USER_IDS);
          if(authorizedIds && authorizedIds.includes(id)){
            return true;
          }else return false;
            // Do something with the extracted ID, such as storing it or displaying it.
        }



        
        // const patterns = getEmailPatterns();
        // if (patterns.length === 0) {
        //   return true; // No patterns specified, allow access
        // }

        // const email = token.email.toLowerCase();
        // for (const pattern of patterns) {
        //   const regex = new RegExp(pattern.trim());
        //   if (email.match(regex)) {
        //     return true; // Email matches one of the patterns, allow access
        //   }
        // }

        return false; // Email does not match any of the patterns, deny access
      }
    },
  },
  secret: getSecret(),
});
