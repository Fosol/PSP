/* 
 * Title Direct Search Services
 *
 * Title Direct Search Services
 *
 * OpenAPI spec version: 4.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System.Runtime.Serialization;


namespace Pims.Ltsa.Models
{
    /// <summary>
    /// StrataPlanCommonPropertyProduct
    /// </summary>
    [DataContract]
    public partial class StrataPlanCommonPropertyProduct : ProductParent
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StrataPlanCommonPropertyProduct" /> class.
        /// </summary>
        /// <param name="strataPlanCommonProperty">strataPlanCommonProperty.</param>
        public StrataPlanCommonPropertyProduct(StrataPlanCommonProperty strataPlanCommonProperty = default, string href = default) : base(href)
        {
            this.StrataPlanCommonProperty = strataPlanCommonProperty;
        }

        /// <summary>
        /// Gets or Sets StrataPlanCommonProperty
        /// </summary>
        [DataMember(Name = "strataPlanCommonProperty", EmitDefaultValue = false)]
        public StrataPlanCommonProperty StrataPlanCommonProperty { get; set; }
    }
}
