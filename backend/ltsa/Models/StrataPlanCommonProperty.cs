/* 
 * Title Direct Search Services
 *
 * Title Direct Search Services
 *
 * OpenAPI spec version: 4.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System.Collections.Generic;
using System.Runtime.Serialization;


namespace Pims.Ltsa.Models
{
    /// <summary>
    /// StrataPlanCommonProperty
    /// </summary>
    [DataContract]
    public partial class StrataPlanCommonProperty
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StrataPlanCommonProperty" /> class.
        /// </summary>
        /// <param name="strataPlanIdentifier">strataPlanIdentifier.</param>
        /// <param name="legalNotationsOnSCP">legalNotationsOnSCP.</param>
        /// <param name="chargesOnSCP">chargesOnSCP.</param>
        public StrataPlanCommonProperty(StrataPlanIdentifier strataPlanIdentifier = default, List<LegalNotationsOnStrataCommonProperty> legalNotationsOnSCP = default, List<ChargesOnStrataCommonProperty> chargesOnSCP = default)
        {
            this.StrataPlanIdentifier = strataPlanIdentifier;
            this.LegalNotationsOnSCP = legalNotationsOnSCP;
            this.ChargesOnSCP = chargesOnSCP;
        }

        /// <summary>
        /// Gets or Sets StrataPlanIdentifier
        /// </summary>
        [DataMember(Name = "strataPlanIdentifier", EmitDefaultValue = false)]
        public StrataPlanIdentifier StrataPlanIdentifier { get; set; }

        /// <summary>
        /// Gets or Sets LegalNotationsOnSCP
        /// </summary>
        [DataMember(Name = "legalNotationsOnSCP", EmitDefaultValue = false)]
        public List<LegalNotationsOnStrataCommonProperty> LegalNotationsOnSCP { get; set; }

        /// <summary>
        /// Gets or Sets ChargesOnSCP
        /// </summary>
        [DataMember(Name = "chargesOnSCP", EmitDefaultValue = false)]
        public List<ChargesOnStrataCommonProperty> ChargesOnSCP { get; set; }
    }
}
