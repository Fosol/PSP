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
    /// ProductParent
    /// </summary>
    [DataContract]
    public partial class ProductParent
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductParent" /> class.
        /// </summary>
        /// <param name="href">URI to retrieve the ordered product PDF.  # It is suggested that third party software confirms the order status is completed before retrieving the ordered product via this URI.  The system will return a 404 (Not Found) response if the ordered product PDF is not yet available. .</param>
        public ProductParent(string href = default)
        {
            this.Href = href;
        }

        /// <summary>
        /// URI to retrieve the ordered product PDF.  # It is suggested that third party software confirms the order status is completed before retrieving the ordered product via this URI.  The system will return a 404 (Not Found) response if the ordered product PDF is not yet available. 
        /// </summary>
        /// <value>URI to retrieve the ordered product PDF.  # It is suggested that third party software confirms the order status is completed before retrieving the ordered product via this URI.  The system will return a 404 (Not Found) response if the ordered product PDF is not yet available. </value>
        [DataMember(Name = "href", EmitDefaultValue = false)]
        public string Href { get; set; }
    }
}
