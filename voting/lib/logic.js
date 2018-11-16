/**
 * Initialize some test assets and participants useful for running a demo.
 * @param {org.acme.voting.votingTransaction} votes - the votingTransaction transaction
 * @transaction
 */
async function votingTransaction(votes){
    var politicianid= votes.singlevote.politicianID
    console.log(politicianid)
    var candidate;
    var RegistryName='org.acme.voting'
     return getParticipantRegistry('org.acme.voting.participantName')
     /*.then(function(ParticipantRegistry){
         return ParticipantRegistry.get(politicianid);
     })*/
     .then(function(politician){
         politicianid.totalvotes.push(votes.singlevote)
         politicianid.votecount=politicianid.totalvotes.length
         candidate=politician      
         return getParticipantRegistry('org.acme.voting.participantName')
     })
     .then(function(ParticipantRegistry){
         ParticipantRegistry.update(politicianid)
     })
    // const voteRegistry=await getAssetRegistry(RegistryName+'.voterinfo')
 }